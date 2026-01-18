import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendanceDto } from 'src/dto/empoyee-attendances.dto';
import { EmployeeAttendance } from 'src/entities/employee-attendances';
import { FindOptionsRelations, FindOptionsSelect, Repository } from 'typeorm';

@Injectable()
export class EmployeeAttendanceRepository {
  constructor(
    @InjectRepository(EmployeeAttendance)
    private readonly employeeAttendanceRepository: Repository<EmployeeAttendance>,
  ) {}

  async create(payload: any) {
    try {
      const data = await this.employeeAttendanceRepository.create(payload);

      await this.employeeAttendanceRepository.insert(data);

      return data;
    } catch (err) {
      throw err;
    }
  }

  async getAll() {
        const selectedColumn: FindOptionsSelect<EmployeeAttendance> = {
            id: true,
            attendanceTypes: true,
            datetime: true,
            isVerified: true,
            photo: true,
            createdAt: true,
            user: {
                id: true,
                profile: {
                    firstName: true,
                    lastName: true,
                },
            }
        };

        const relations: FindOptionsRelations<EmployeeAttendance> = {
            user: {
                profile: true,
            },
        };

        try {
            const result = await this.employeeAttendanceRepository.find({
                select: selectedColumn,
                relations: relations,
                order: {
                    createdAt: 'DESC',
                },
            });

            return result;
        } catch (err) {
            throw err;
        }
    }
}

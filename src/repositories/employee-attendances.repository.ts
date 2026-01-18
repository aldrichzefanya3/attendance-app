import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AttendanceDto } from 'src/dto/empoyee-attendances.dto';
import { EmployeeAttendance } from 'src/entities/employee-attendances';
import { Repository } from 'typeorm';

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
}

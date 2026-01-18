import { Injectable } from "@nestjs/common";
import { EmployeeMasterDto } from "src/dto/employee-master.dto";
import { EmployeeAttendanceRepository } from "src/repositories/employee-attendances.repository";
import { UserProfilesRepository } from "src/repositories/user-profiles.repository";
import { UserRepository } from "src/repositories/users.repository";


@Injectable()
export class EmployeeMasterService {
  constructor(
    private readonly userProfilesRepository: UserProfilesRepository,
  ) {}

  async createDataEmployee(payload: EmployeeMasterDto, auth: any) {
    try {
      const result = await this.userProfilesRepository.create({
        ...payload,
        user: {
          id: auth.id,
        },
      });

      return {
        success: true,
        data: result,
        message: 'Success to create employee data',
      };
    } catch (err) {
      return {
        success: false,
        data: null,
        message: String(err),
      };
    }
  }
}


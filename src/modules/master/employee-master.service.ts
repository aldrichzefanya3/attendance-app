import { Injectable } from "@nestjs/common";
import { CreateEmployeeMasterDto } from "src/dto/employee-master.dto";
import { UserProfileRepository } from "src/repositories/user-profiles.repository";
import { UserRepository } from "src/repositories/users.repository";


@Injectable()
export class EmployeeMasterService {
  constructor(
    private readonly userProfileRepository: UserProfileRepository,
    private readonly userRepository: UserRepository,
  ) {}
  
  async createDataEmployee(payload: CreateEmployeeMasterDto, auth: any) {
    try {
      const user = await this.userRepository.create({
        email: payload.email,
        role: 'employee',
      });

      const result = await this.userProfileRepository.create({
        ...payload,
        user: {
          id: await user['id'],
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

  async deleteDataEmployee(id: string) {
    try {
      const result = await this.userProfileRepository.deleteById(id);

      return {
        success: true,
        data: result,
        message: 'Success to delete employee data',
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


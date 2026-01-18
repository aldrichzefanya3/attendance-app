import { Injectable } from "@nestjs/common";
import { AttendanceDto } from "src/dto/empoyee-attendances.dto";
import { EmployeeAttendanceRepository } from "src/repositories/employee-attendances.repository";
import { UserRepository } from "src/repositories/users.repository";


@Injectable()
export class AttendanceService {
    constructor(
        private readonly employeeAttendanceRepository: EmployeeAttendanceRepository,
        private readonly userRepository: UserRepository
    ){}

    async createAttendance(payload: AttendanceDto, auth: any) {
        try{
            const result = await this.employeeAttendanceRepository.create({
                ...payload,
                user : {
                    id: auth.id
                }
            })
            
            return {
                success: true,
                data: result,
                message: "Success to clock in/clock out"
            }
        }catch (err) {
            return {
                success: false,
                data: null,
                message: String(err)
            }
        }
    }
}
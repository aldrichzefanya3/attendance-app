import { Body, Controller, Post, Req, UseGuards } from "@nestjs/common";
import { AuthService } from "../auth/auth.service";
import { JwtAuthGuard } from "../auth/jwt-auth.guard";
import { AttendanceService } from "./attendance.service";
import { AttendanceDto } from "src/dto/empoyee-attendances.dto";
import { User } from "../auth/auth-user.decorator";

@Controller("/attendance")
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async createAttendance(@User() user: any, @Body() dto: AttendanceDto) {
    
    return this.attendanceService.createAttendance({
      ...dto
    }, user)
  }
}

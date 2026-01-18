import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AttendanceService } from './attendance.service';
import { AttendanceDto } from 'src/dto/empoyee-attendances.dto';
import { User } from '../auth/auth-user.decorator';

@Controller('/attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async createAttendance(@User() user: any, @Body() dto: AttendanceDto) {
    return this.attendanceService.createAttendance(
      {
        ...dto,
      },
      user,
    );
  }

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  async getAll() {
      return this.attendanceService.getAllComplaint();
    }
}

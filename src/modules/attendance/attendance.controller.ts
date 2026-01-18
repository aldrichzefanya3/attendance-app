import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from 'src/dto/empoyee-attendances.dto';
import { User } from '../auth/auth-user.decorator';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Role } from 'src/enums/role.enum';
import { Roles } from '../auth/roles/roles.decorator';

@Controller('/attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Public)
  async createAttendance(@User() user: any, @Body() dto: CreateAttendanceDto) {
    return this.attendanceService.createAttendance(
      {
        ...dto,
      },
      user,
    );
  }

  @Get('/all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperUser)
  async getAll() {
      return this.attendanceService.getAllComplaint();
    }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeAttendance } from 'src/entities/employee-attendances';
import { User } from 'src/entities/users.entity';
import { AttendanceController } from './attendance.controller';
import { AttendanceService } from './attendance.service';
import { EmployeeAttendanceRepository } from 'src/repositories/employee-attendances.repository';
import { UserRepository } from 'src/repositories/users.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, EmployeeAttendance])],
  controllers: [AttendanceController],
  providers: [AttendanceService, EmployeeAttendanceRepository, UserRepository],
})
export class AttendanceModule {}

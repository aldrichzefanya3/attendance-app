import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';

import { EmployeeAttendanceRepository } from 'src/repositories/employee-attendances.repository';
import { UserRepository } from 'src/repositories/users.repository';
import { UserProfile } from 'src/entities/user-profiles.entity';
import { EmployeeMasterService } from './employee-master.service';
import { UserProfilesRepository } from 'src/repositories/user-profiles.repository';
import { EmployeeMasterController } from './employee-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile])],
  controllers: [EmployeeMasterController],
  providers: [EmployeeMasterService, UserProfilesRepository, UserRepository],
})
export class EmployeeMasterModule {}

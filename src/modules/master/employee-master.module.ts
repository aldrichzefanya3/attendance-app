import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/users.entity';

import { UserRepository } from 'src/repositories/users.repository';
import { UserProfile } from 'src/entities/user-profiles.entity';
import { EmployeeMasterService } from './employee-master.service';
import { UserProfileRepository } from 'src/repositories/user-profiles.repository';
import { EmployeeMasterController } from './employee-master.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserProfile])],
  controllers: [EmployeeMasterController],
  providers: [EmployeeMasterService, UserProfileRepository, UserRepository],
})
export class EmployeeMasterModule {}

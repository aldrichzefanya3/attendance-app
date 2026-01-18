import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './platform/database/database.module';
import { ConfigModule } from '@nestjs/config';
import { AttendanceModule } from './modules/attendance/attendance.module';
import { EmployeeMasterModule } from './modules/master/employee-master.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: false,
    }),
    AuthModule,
    DatabaseModule,
    AttendanceModule,
    EmployeeMasterModule
  ],
  controllers: [AppController],
  providers: [
    AppService],
})
export class AppModule {}

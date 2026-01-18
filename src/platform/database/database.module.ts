import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { User } from '../../entities/users.entity';
import { UserProfile } from '../../entities/user-profiles.entity';
import { EmployeeAttendance } from 'src/entities/employee-attendances';

@Module({
  imports: [
    ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: join(process.cwd(), '.env'),
        expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        synchronize: true,
        migrationsRun: false,
        entities: [User, UserProfile, EmployeeAttendance],
        logging: ['schema', 'error'],
      }),
    }),
  ],
})
export class DatabaseModule {}

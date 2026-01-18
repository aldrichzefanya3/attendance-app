import {
  IsBoolean,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateAttendanceDto {
  @Expose({ name: 'attendance_types' })
  @IsEnum(['clock_in', 'clock_out'])
  attendanceTypes: 'clock_in' | 'clock_out';

  @Expose({ name: 'datetime' })
  @IsISO8601()
  datetime: string;

  @IsString()
  @IsNotEmpty()
  photo: string;

  @Expose({ name: 'is_verified' })
  @IsBoolean()
  isVerified: boolean;
}

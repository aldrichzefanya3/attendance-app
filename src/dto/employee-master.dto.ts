import {
  IsString,
  IsOptional,
  IsBoolean,
  IsDateString,
  IsEnum,
  MaxLength,
} from 'class-validator';
import { Expose } from 'class-transformer';

export class EmployeeMasterDto {
  @Expose({ name: 'first_name' })
  @IsString()
  @MaxLength(100)
  firstName: string;

  @Expose({ name: 'last_name' })
  @IsString()
  @MaxLength(100)
  lastName: string;

  @Expose({ name: 'phone_number' })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @Expose({ name: 'birth_date' })
  @IsOptional()
  @IsDateString()
  birthDate?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @Expose({ name: 'join_date' })
  @IsOptional()
  @IsDateString()
  joinDate?: string;

  @Expose({ name: 'employment_status' })
  @IsEnum(['permanent', 'contract', 'intern'])
  employmentStatus: 'permanent' | 'contract' | 'intern';

  @Expose({ name: 'is_active' })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}

import { Body, Controller, Delete,  Param, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt/jwt-auth.guard';
import { User } from '../auth/auth-user.decorator';
import { RolesGuard } from '../auth/roles/roles.guard';
import { Role } from 'src/enums/role.enum';
import { Roles } from '../auth/roles/roles.decorator';
import { EmployeeMasterService } from './employee-master.service';
import { CreateEmployeeMasterDto } from 'src/dto/employee-master.dto';

@Controller('/master')
export class EmployeeMasterController {
  constructor(private readonly employeeMasterService: EmployeeMasterService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperUser)
  async createDataEmployee(@User() user: any, @Body() dto: CreateEmployeeMasterDto) {
    return this.employeeMasterService.createDataEmployee(
      {
        ...dto,
      },
      user,
    );
  }

  @Delete('/delete/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.SuperUser)
  async deleteMasterEmployee(@Param('id') id: string) {
      return this.employeeMasterService.deleteDataEmployee(id);
    }
}

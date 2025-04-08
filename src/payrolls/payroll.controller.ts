import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';
import { Payroll } from './payroll.entity';

@Controller('payrolls')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post()
  create(@Body() createPayrollDto: CreatePayrollDto): Promise<Payroll> {
    return this.payrollService.create(createPayrollDto);
  }

  @Get()
  findAll(): Promise<Payroll[]> {
    return this.payrollService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Payroll> {
    return this.payrollService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePayrollDto: UpdatePayrollDto,
  ): Promise<Payroll> {
    return this.payrollService.update(+id, updatePayrollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.payrollService.remove(+id);
  }
}

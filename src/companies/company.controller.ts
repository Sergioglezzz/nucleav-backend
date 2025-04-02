import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { Company } from './company.entity';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Get()
  findAll() {
    return this.companyService.findAll();
  }

  @Get(':cif')
  findOne(@Param('cif') cif: string) {
    return this.companyService.findOne(cif);
  }

  @Post()
  create(@Body() data: Partial<Company>) {
    return this.companyService.create(data);
  }

  @Delete(':cif')
  remove(@Param('cif') cif: string) {
    return this.companyService.remove(cif);
  }
}

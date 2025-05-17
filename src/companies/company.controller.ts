import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { UseGuards, Req } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Request } from 'express';
import { Company } from './company.entity';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  create(
    @Body() createCompanyDto: CreateCompanyDto,
    @Req() req: Request
  ): Promise<Company> {
    const userId = req.user?.['id']; // o req.user?.sub si usas JWT estándar
    if (!userId) {
      throw new Error('User information is missing from request');
    }
    return this.companyService.create(createCompanyDto, userId);
  }

  @Get()
  findAll(): Promise<Company[]> {
    return this.companyService.findAll();
  }

  @Get(':cif')
  findOne(@Param('cif') cif: string): Promise<Company> {
    return this.companyService.findOne(cif);
  }

  @Patch(':cif')
  update(
    @Param('cif') cif: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    return this.companyService.update(cif, updateCompanyDto);
  }

  @Delete(':cif')
  remove(@Param('cif') cif: string): Promise<void> {
    return this.companyService.remove(cif);
  }
}

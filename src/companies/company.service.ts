import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const company = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(company);
  }

  async findAll(): Promise<Company[]> {
    return this.companyRepository.find({ relations: ['creator'] });
  }

  async findOne(cif: string): Promise<Company> {
    const company = await this.companyRepository.findOne({
      where: { cif },
      relations: ['creator'],
    });
    if (!company) {
      throw new Error(`Company with CIF ${cif} not found`);
    }
    return company;
  }

  async update(cif: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    await this.companyRepository.update(cif, updateCompanyDto);
    return this.findOne(cif);
  }

  async remove(cif: string): Promise<void> {
    await this.companyRepository.delete(cif);
  }
}

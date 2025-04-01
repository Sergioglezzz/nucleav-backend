import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private companyRepository: Repository<Company>,
  ) {}

  async create(companyData: Partial<Company>): Promise<Company> {
    const newCompany = this.companyRepository.create(companyData);
    return this.companyRepository.save(newCompany);
  }
}

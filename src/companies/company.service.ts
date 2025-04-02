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

  create(data: Partial<Company>) {
    const company = this.companyRepository.create(data);
    return this.companyRepository.save(company);
  }

  findAll() {
    return this.companyRepository.find({ relations: ['creator'] });
  }

  findOne(cif: string) {
    return this.companyRepository.findOne({
      where: { cif },
      relations: ['creator'],
    });
  }

  async remove(cif: string): Promise<void> {
    await this.companyRepository.delete(cif);
  }
}

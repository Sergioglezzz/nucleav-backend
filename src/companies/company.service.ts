import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
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
  ) { }

  async create(dto: CreateCompanyDto, userId: number): Promise<Company> {
    const existing = await this.companyRepository.findOne({ where: { cif: dto.cif } });

    if (existing) {
      throw new ConflictException('Ya existe una empresa con este CIF.');
    }

    const newCompany = this.companyRepository.create({
      ...dto,
      created_by: userId,
    });

    return this.companyRepository.save(newCompany);
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

  async update(cif: string, dto: UpdateCompanyDto): Promise<Company> {
    const company = await this.companyRepository.findOneBy({ cif })
    if (!company) throw new NotFoundException('Empresa no encontrada')

    Object.assign(company, dto)
    return this.companyRepository.save(company)
  }


  async remove(cif: string): Promise<void> {
    await this.companyRepository.delete(cif);
  }
}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Material } from './material.entity';
import { MaterialService } from './material.service';
import { MaterialController } from './material.controller';
import { Company } from '../companies/company.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Material, Company, User])],
  providers: [MaterialService],
  controllers: [MaterialController],
})
export class MaterialModule {}

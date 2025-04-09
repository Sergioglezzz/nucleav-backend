import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from '../projects/project.entity';
import { Company } from '../companies/company.entity';

@Entity()
export class ProjectCompanyCollaborator {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Project)
  @JoinColumn({ name: 'project_id' })
  project: Project;

  @Column()
  project_id: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_cif' })
  company: Company;

  @Column()
  company_cif: string;
}

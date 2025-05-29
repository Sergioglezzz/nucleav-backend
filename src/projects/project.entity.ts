import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Company } from '../companies/company.entity';
import { User } from '../users/user.entity';
import { ProjectMaterial } from '../project_material/project-material.entity';
import { ProjectUser } from '../project_user/project-user.entity';

export enum ProjectType {
  FILM = 'film',
  TV = 'tv',
  ADVERTISING = 'advertising',
  OTHER = 'other',
}

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_cif' })
  company: Company;

  @Column()
  company_cif: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'created_by' })
  creator: User;

  @Column()
  created_by: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column({
    type: 'enum',
    enum: ProjectType,
    default: ProjectType.OTHER,
  })
  type: ProjectType;

  @Column({ type: 'date', nullable: true })
  start_date?: Date;

  @Column({ type: 'date', nullable: true })
  end_date?: Date;

  @Column({ default: 'draft' })
  status: string;

  @Column({ default: false })
  is_collaborative: boolean;

  @OneToMany(
    () => ProjectMaterial,
    (projectMaterial: ProjectMaterial) => projectMaterial.project,
  )
  projectMaterials: ProjectMaterial[];

  @OneToMany(() => ProjectUser, (projectUser) => projectUser.project)
  projectUsers: ProjectUser[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

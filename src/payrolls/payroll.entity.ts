import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { Company } from '../companies/company.entity';

@Entity()
export class Payroll {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee)
  @JoinColumn({ name: 'employee_id' })
  employee: Employee;

  @Column()
  employee_id: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_cif' })
  company: Company;

  @Column()
  company_cif: string;

  @Column({ type: 'date' })
  payroll_date: Date;

  @Column()
  file_url: string;

  @Column('numeric', { precision: 10, scale: 2, nullable: true })
  gross_amount?: number;

  @Column('numeric', { precision: 10, scale: 2, nullable: true })
  net_amount?: number;

  @Column({ nullable: true })
  description?: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

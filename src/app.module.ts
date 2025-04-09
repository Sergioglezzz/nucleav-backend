import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';
import { EmployeesModule } from './employees/employee.module';
import { CompanyModule } from './companies/company.module';
import { PayrollModule } from './payrolls/payroll.module';
import { ProjectModule } from './projects/project.module';
import { EventModule } from './events/event.module';
import { MaterialModule } from './materials/material.module';
import { MaterialAssignedModule } from './material_assigned/material-assigned.module';
import { EventAssignedModule } from './event_assigned/event-assigned.module';
import { ProjectEmployeeModule } from './project_employee/project-employee.module';
import { ProjectMaterialModule } from './project_material/project-material.module';
import { ProjectCompanyCollaboratorModule } from './project_company_collaborator/project-company-collaborator.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.development',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      // En produccion debo desactivar syncrhronice y usar migrations
      // synchronize: false, // Solo en producción
      // synchronize: process.env.NODE_ENV !== 'production', // Solo en desarrollo
      synchronize: true, //temporal para railway (solo en desarrollo)
      // synchronize: process.env.NODE_ENV !== 'production', // Solo en desarrollo
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
      autoLoadEntities: true,
    }),
    UsersModule,
    EmployeesModule,
    CompanyModule,
    PayrollModule,
    ProjectModule,
    EventModule,
    MaterialModule,
    MaterialAssignedModule,
    EventAssignedModule,
    ProjectEmployeeModule,
    ProjectMaterialModule,
    ProjectCompanyCollaboratorModule,
  ],
})
export class AppModule {}

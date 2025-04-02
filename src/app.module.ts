import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';
import { EmployeesModule } from './employees/employee.module';
import { CompanyModule } from './companies/company.module';

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
  ],
})
export class AppModule {}

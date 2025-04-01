import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/employees.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      synchronize: process.env.NODE_ENV !== 'production', // Solo en desarrollo
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      autoLoadEntities: true,
      entities: [User, Employee],
    }),
    UsersModule,
    EmployeesModule,
  ],
})
export class AppModule { }


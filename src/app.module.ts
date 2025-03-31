// import { Module } from '@nestjs/common';
// import { ConfigModule } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { TasksModule } from './tasks/tasks.module';

// @Module({
//   imports: [
//     ConfigModule.forRoot({
//       isGlobal: true,
//     }),
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       url: process.env.DATABASE_URL,
//       autoLoadEntities: true,
//       synchronize: true,
//       ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
//     }),
//     TasksModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';
import { Employee } from './employees/employees.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL, // Railway proporciona esta variable
      synchronize: true, // ¡Solo para desarrollo! En producción usa migrations.
      entities: [User, Employee], // O utiliza la opción de cargar todos los archivos en dist si lo prefieres
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }),
    UsersModule,
    EmployeesModule,
  ],
})
export class AppModule {}


import { Injectable } from '@nestjs/common';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable()
export class UserService {
  // Lista de usuarios de prueba
  private users: User[] = [
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'María López', email: 'maria@example.com' },
    { id: 3, name: 'Carlos García', email: 'carlos@example.com' },
  ];

  findAll(): User[] {
    return this.users;
  }
}

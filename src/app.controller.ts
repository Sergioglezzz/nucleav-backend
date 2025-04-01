import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('external')
  getExternalData() {
    return { message: 'Datos internos del backend' };
  }
}

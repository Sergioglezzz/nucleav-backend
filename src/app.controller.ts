import { Controller, Get } from '@nestjs/common';
import axios from 'axios';

@Controller()
export class AppController {
  @Get('external')
  async getExternalData() {
    try {
      const response = await axios.get('https://api.publicapis.org/entries');
      return response.data;
    } catch (error) {
      return { error: 'No se pudo obtener la información' };
    }
  }
}
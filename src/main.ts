import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.use(
    cors({
      origin: ['https://nucleav.com'], // Ajusta según tu dominio en Vercel
      credentials: true, // Permitir envío de cookies y headers de autenticación
    }),
  );

  // Pipes de validación
  app.useGlobalPipes(new ValidationPipe());

  // Configuración Swagger (opcional para documentación)
  const config = new DocumentBuilder()
    .setTitle('Demo API')
    .setDescription('API de prueba para la demo de conexión')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap().catch((err) => {
  console.error('Error during bootstrap:', err);
});

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const allowedOrigins =
    process.env.NODE_ENV === 'production'
      ? ['https://nucleav.com', 'https://www.nucleav.com'] // Solo producción
      : ['http://localhost:3000']; // Desarrollo

  // Habilitar CORS
  app.enableCors({
    origin: allowedOrigins, // Permitir todas las solicitudes (solo para desarrollo)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  // Prefijo global para versionado
  app.setGlobalPrefix('v1');

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

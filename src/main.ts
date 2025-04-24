import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import * as bodyParser from 'body-parser'; // 👈 Importación necesaria

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  const allowedOrigins =

  process.env.NODE_ENV === 'production'
      ? ['https://nucleav.com', 'https://www.nucleav.com']
      : ['http://localhost:3000'];


  // CORS
  app.enableCors({
    origin: allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials: true,
  });

  // Prefijo global
  app.setGlobalPrefix('v1');

  // Guard global
  app.useGlobalGuards(new JwtAuthGuard(new Reflector()));

  // Pipes de validación
  app.useGlobalPipes(new ValidationPipe());

  // Swagger
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

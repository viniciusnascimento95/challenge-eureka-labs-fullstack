import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: ['http://localhost:3333', 'http://localhost:3000'],
    methods: ['GET', 'POST'],
  });
  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('API Eureka')
    .setDescription('The API for eureka test fullstack developer')
    .setVersion('1.0')
    .addTag('Eureka API')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3333);
}
bootstrap();

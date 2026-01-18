import { NestFactory } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: '.env',
  });
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 8000;

  app.setGlobalPrefix('api/');

  app.enableCors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
});

  app.useGlobalPipes(
    new ValidationPipe({ transform: true })
  );

  await app.listen(port);
}
bootstrap();

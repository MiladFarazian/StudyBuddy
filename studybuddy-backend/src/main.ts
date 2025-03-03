import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors(); // ✅ Allow requests from frontend

  await app.listen(3002); // Ensure this matches the frontend request
}
bootstrap();

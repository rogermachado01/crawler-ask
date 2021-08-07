import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';
import { ValidationPipe } from './pipes/ValidationPipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(8080);
}
bootstrap();

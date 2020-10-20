import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app.module';
import { environment } from 'app.environment';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const { PORT = 8080 } = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swaggers', app, document);

  await app.listen(PORT);
}

bootstrap().then(() => {
  Logger.log(`Quizz running at ${PORT}, env: ${environment}`, 'Starting', false);
});

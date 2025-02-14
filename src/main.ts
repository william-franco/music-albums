import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClusterService } from './common/services/cluster.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  await ClusterService.initialize(async () => {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
      .setTitle('Music Albums API')
      .setDescription('Backend application to search for albums, developed with nestjs and the AGORA methodology.')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT ?? 3000);
    console.log(`Worker PID ${process.pid} listening on http://localhost:3000`);
  });
}
bootstrap();

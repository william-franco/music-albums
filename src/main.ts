import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClusterService } from './common/services/cluster.service';

async function bootstrap() {
  await ClusterService.initialize(async () => {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT ?? 3000);
    console.log(`Worker PID ${process.pid} listening on http://localhost:3000`);
  });
}
bootstrap();

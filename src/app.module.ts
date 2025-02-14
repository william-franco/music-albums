import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './common/services/prisma.service';
import { ClusterService } from './common/services/cluster.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, ClusterService],
})
export class AppModule { }

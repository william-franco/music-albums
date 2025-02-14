import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './common/services/prisma.service';
import { ClusterService } from './common/services/cluster.service';
import { AlbumsModule } from './features/albums/album.module';

@Module({
  imports: [AlbumsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ClusterService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { AlbumsController } from './controllers/album.controller';
import { AlbumsService } from './services/album.service';
import { AlbumsRepository } from './repositories/album.repository';
import { PrismaService } from 'src/common/services/prisma.service';

@Module({
    controllers: [AlbumsController],
    providers: [AlbumsService, AlbumsRepository, PrismaService],
    exports: [AlbumsService],
})
export class AlbumsModule { }
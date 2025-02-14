import { Injectable } from '@nestjs/common';
import { Album } from '@prisma/client';
import { PrismaService } from 'src/common/services/prisma.service';
import { AlbumModel } from '../models/album.model';

@Injectable()
export class AlbumsRepository {
    constructor(private readonly prisma: PrismaService) { }

    async create(data: { title: string; artist: string; year: number }): Promise<AlbumModel> {
        const album = await this.prisma.album.create({ data });
        return new AlbumModel(album);
    }

    async deleteAll(): Promise<void> {
        await this.prisma.album.deleteMany();
    }

    async findAll(): Promise<AlbumModel[]> {
        const albums = await this.prisma.album.findMany();
        return albums.map(album => new AlbumModel(album));
    }

    async findById(id: number): Promise<AlbumModel | null> {
        const album = await this.prisma.album.findUnique({ where: { id } });
        return album ? new AlbumModel(album) : null;
    }
}

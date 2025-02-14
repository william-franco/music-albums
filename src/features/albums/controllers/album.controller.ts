import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AlbumsService } from '../services/album.service';
import { CreateAlbumDto } from '../dtos/create-album.dto';

@Controller('api/albums')
export class AlbumsController {
    constructor(private readonly service: AlbumsService) { }

    @Post()
    async createAlbum(@Body() body: CreateAlbumDto) {
        return this.service.createAlbum(body);
    }

    @Delete('')
    async deleteAllAlbums() {
        return this.service.deleteAllAlbums();
    }

    @Get()
    async getAlbums() {
        return this.service.getAllAlbums();
    }

    @Get(':id')
    async getAlbumById(@Param('id') id: number) {
        return this.service.getAlbumById(id);
    }
}

import { Injectable } from '@nestjs/common';
import { AlbumsRepository } from '../repositories/album.repository';
import { CreateAlbumDto } from '../dtos/create-album.dto';

@Injectable()
export class AlbumsService {
    constructor(private readonly repository: AlbumsRepository) { }

    async createAlbum(data: CreateAlbumDto) {
        return this.repository.create(data);
    }

    async deleteAllAlbums() {
        return this.repository.deleteAll();
    }

    async getAllAlbums() {
        return this.repository.findAll();
    }

    async getAlbumById(id: number) {
        return this.repository.findById(id);
    }
}

export class AlbumModel {
    constructor(album: { id: number; title: string; artist: string; year: number; createdAt: Date; updatedAt: Date }) {
        this.id = album.id;
        this.title = album.title;
        this.artist = album.artist;
        this.year = album.year;
        this.createdAt = album.createdAt;
        this.updatedAt = album.updatedAt;
    }

    id: number;
    title: string;
    artist: string;
    year: number;
    createdAt: Date;
    updatedAt: Date;
}

import { IsString, IsInt, Min } from 'class-validator';

export class CreateAlbumDto {
    @IsString()
    title: string;

    @IsString()
    artist: string;

    @IsInt()
    @Min(1900)
    year: number;
}

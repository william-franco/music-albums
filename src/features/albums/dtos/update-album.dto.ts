import { IsString, IsInt, Min, IsOptional } from 'class-validator';

export class UpdateAlbumDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    artist?: string;

    @IsOptional()
    @IsInt()
    @Min(1900)
    year?: number;
}

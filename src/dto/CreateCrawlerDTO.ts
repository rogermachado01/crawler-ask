import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCrawlerDTO {
    @IsString({
        message: 'Title is not a string type',
    })
    @IsNotEmpty({message: 'This field is required'})
    checkin: string;

    @IsString({
        message: 'Title is not a string type',
    })
    @IsNotEmpty({message: 'This field is required'})
    checkout: string;

    @IsOptional()
    url?: string;
}

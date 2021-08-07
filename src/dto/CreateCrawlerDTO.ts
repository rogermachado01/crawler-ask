import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateCrawlerDTO {
    @IsString({
        message: 'CHECKIN is not a STRING type',
    })
    @IsNotEmpty({message: 'CHECKIN field is required'})
    checkin: string;

    @IsString({
        message: 'CHECKOUT is not a STRING type',
    })
    @IsNotEmpty({message: 'CHECKOUT field is required'})
    checkout: string;

    @IsOptional()
    @IsString({
        message: 'URL is not a STRING type',
    })
    url?: string;
}

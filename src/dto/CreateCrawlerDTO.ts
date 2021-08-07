import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CrawlerFactoryENUM } from 'src/entities/Crawler';
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
        message: 'TYPE is not a STRING type',
    })
    type: CrawlerFactoryENUM;
}

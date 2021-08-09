import { Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CrawlerFactoryENUM } from '../entities/Crawler';
import { dateUtil } from '../util';
export class CreateCrawlerDTO {
    @IsString({
        message: 'CHECKIN is not a STRING type',
    })
    @IsNotEmpty({message: 'CHECKIN field is required'})
    @Transform(({ value }) => dateUtil(value), { toClassOnly: true })
    checkin: string;

    @IsString({
        message: 'CHECKOUT is not a STRING type',
    })
    @IsNotEmpty({message: 'CHECKOUT field is required'})
    @Transform(({ value }) => dateUtil(value), { toClassOnly: true })
    checkout: string;

    @IsOptional()
    @IsString({
        message: 'TYPE is not a STRING type',
    })
    type?: CrawlerFactoryENUM;

}

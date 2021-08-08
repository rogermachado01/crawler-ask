import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { CrawlerFactoryENUM } from 'src/entities/Crawler';
import { getUnixTime } from 'date-fns'
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

    @IsOptional()
    @IsBoolean({
        message: 'PUPPTEER is not a BOOLEAN type',
    })
    puppteer?: boolean
}

const dateUtil = (date: string) => {
    const newDate = date.split('-')
    const year = Number(newDate[0])
    const month = newDate[1] === '0' ? Number(newDate[1]) : Number(newDate[1])- 1
    const day = Number(newDate[2])
    return getUnixTime(new Date(year, month, day)).toString()
}
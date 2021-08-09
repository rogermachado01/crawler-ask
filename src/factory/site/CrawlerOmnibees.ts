import { CreateCrawlerDTO } from "../../dto/CreateCrawlerDTO";
import { CrawlerEntity } from "../../entities/Crawler";
import { CrawlerFactoryInterface } from "../CrawlerFactoryInterface";
import * as puppeteer from 'puppeteer'
import { Injectable } from "@nestjs/common";
@Injectable()
export class Omnibees implements CrawlerFactoryInterface {
    data: CrawlerEntity[];

    async execute(createCrawler: CreateCrawlerDTO): Promise<void> {
        const browser = await puppeteer.launch({ headless: true, defaultViewport: { width: 1280, height: 720}});
        const page = await browser.newPage();
        await page.goto('https://book.omnibees.com/hotelresults?CheckIn='+createCrawler.checkin+'&CheckOut='+createCrawler.checkout+'&Code=AMIGODODANIEL&NRooms=1&_askSI=d34b1c89-78d2-45f3-81ac-4af2c3edb220&ad=2&ag=-&c=2983&ch=0&diff=false&group_code=&lang=pt-BR&loyality_card=&utm_source=asksuite&q=5462#show-more-hotel-button%3C/pre%3E');

        this.data = await page.$$eval('.roomrate', (rooms) => {
            const cleantText = (text: string) => {
                text = text?.replace(/\\n+/, ' ')
                text = text?.replace(/(... \(ver mais\))/, '')
                return text
            }
            const res: CrawlerEntity[] = rooms.map(room => {
                return {
                   name: cleantText(room.querySelector('.hotel_name').textContent),
                   description: cleantText(room.querySelector('.hotel-description').textContent),
                   price: cleantText(room.querySelector('.price-total')?.textContent),
                   image: room.querySelector('.image-step2').getAttribute('src'),
            }})
            return res
        })

    }

}
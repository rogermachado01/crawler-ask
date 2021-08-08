import { CreateCrawlerDTO } from "src/dto/CreateCrawlerDTO";
import { CrawlerEntity } from "src/entities/Crawler";
import { CrawlerFactoryInterface } from "../CrawlerFactoryInterface";
import * as puppeteer from 'puppeteer'
export class Omnibees implements CrawlerFactoryInterface {
    data: CrawlerEntity[];

    async execute(createCrawler: CreateCrawlerDTO): Promise<void> {
        const browser = await puppeteer.launch({ headless: false, defaultViewport: { width: 1280, height: 720}});
        const page = await browser.newPage();
        await page.goto('https://book.omnibees.com/hotelresults?CheckIn='+createCrawler.checkin+'&CheckOut='+createCrawler.checkout+'&Code=AMIGODODANIEL&NRooms=1&_askSI=d34b1c89-78d2-45f3-81ac-4af2c3edb220&ad=2&ag=-&c=2983&ch=0&diff=false&group_code=&lang=pt-BR&loyality_card=&utm_source=asksuite&q=5462#show-more-hotel-button%3C/pre%3E');
        
        const result = await page.$$eval('.roomrate', (rooms) => {
            const res = rooms.map(room => {
               return {
                   'name': room.querySelector('.hotel_name').textContent,
                   'description': room.querySelector('.hotel-description').textContent,
                   'price': room.querySelector('.price-total')?.textContent,
                   'image': room.querySelector('.image-step2').getAttribute('src')
               } 
            })

            return res
        })
                
        this.data = result
    }



}
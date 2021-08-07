import { CreateCrawlerDTO } from "src/dto/CreateCrawlerDTO";
import { CrawlerEntity } from "src/entities/Crawler";
import { CrawlerFactoryInterface } from "../CrawlerFactoryInterface";

export class Omnibees implements CrawlerFactoryInterface {
    data: CrawlerEntity;

    search(createCrawler: CreateCrawlerDTO): CrawlerEntity {
        // 'https://book.omnibees.com/'
        const res = new CrawlerEntity();
        res.crawlerItems = [
            {
                name: 'string', // Room name 
                description: 'string', // Room description 
                price: 'string', // Room daily price 
                image: 'string' // Room main photo
            }
        ]
        throw new Error("Method not implemented.");
    }

}
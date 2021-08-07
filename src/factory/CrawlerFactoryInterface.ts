import { CreateCrawlerDTO } from "src/dto/CreateCrawlerDTO";
import { CrawlerEntity } from "src/entities/Crawler";

export interface CrawlerFactoryInterface {
    data: CrawlerEntity
    search(createCrawler: CreateCrawlerDTO): CrawlerEntity
}
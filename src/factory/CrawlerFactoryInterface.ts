import { CreateCrawlerDTO } from "../dto/CreateCrawlerDTO";
import { CrawlerEntity } from "../entities/Crawler";

export interface CrawlerFactoryInterface {
    data: CrawlerEntity[]
    execute(createCrawler: CreateCrawlerDTO): Promise<void>
}
import { CrawlerEntity } from "src/entities/Crawler";

export interface CrawlerFactoryInterface {
    serch(): string
    result(): CrawlerEntity
}
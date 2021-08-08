import { Injectable } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { CreateCrawlerDTO } from "src/dto/CreateCrawlerDTO";
import { CrawlerEntity, CrawlerFactoryENUM } from "src/entities/Crawler";
import { CrawlerFactoryInterface } from "./CrawlerFactoryInterface";
import { Omnibees } from "./site/CrawlerOmnibees";

@Injectable()
export class CrawlerFactory {

    crawlerMap: Map<string, CrawlerFactoryInterface> = new Map()
    crawler: CrawlerFactoryInterface
    crawlerDTO: CreateCrawlerDTO

    constructor() {
        this.crawlerMap.set(CrawlerFactoryENUM.OMNIBEES, new Omnibees())
    }

    init(createCrawler: CreateCrawlerDTO) {
        this.crawlerDTO = plainToClass(CreateCrawlerDTO, createCrawler);
        this.crawler = this.crawlerMap.get(this.crawlerDTO.type ?? CrawlerFactoryENUM.OMNIBEES)
        return this.result()
    }

    async result(): Promise<CrawlerEntity[]> {
        try {
            await this.crawler.execute(this.crawlerDTO)
        } catch (err) {
            throw new Error(err);
        }
        return this.crawler.data
    }
}

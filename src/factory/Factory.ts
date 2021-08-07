import { Injectable } from "@nestjs/common";
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
        this.crawlerDTO = createCrawler
        this.crawler = this.crawlerMap.get(this.crawlerDTO.type ?? CrawlerFactoryENUM.OMNIBEES)
        return this.result()
    }

    result(): CrawlerEntity {
        this.crawler.search(this.crawlerDTO)
        return this.crawler.data
    }
}

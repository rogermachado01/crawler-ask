import { Injectable } from "@nestjs/common";
import { CrawlerFactoryInterface } from "./CrawlerFactoryInterface";
import { Omnibees } from "./site/CrawlerOmnibees";

@Injectable()
export class CrawlerFactory {

    crawler: Map<string, CrawlerFactoryInterface> = new Map()
    
    constructor() {
        this.crawler.set('https://book.omnibees.com/', new Omnibees())
    }

    init(url: string) {
        // defaulting when url isn't provide
        return this.crawler.get(url ? url : 'https://book.omnibees.com/')
    }
}

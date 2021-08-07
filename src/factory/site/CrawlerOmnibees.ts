import { CrawlerEntity } from "src/entities/Crawler";
import { CrawlerFactoryInterface } from "../CrawlerFactoryInterface";

export class Omnibees implements CrawlerFactoryInterface {
    result(): CrawlerEntity {
        return new CrawlerEntity()
    }

    serch() {
        return 'asdad'
    }
    

}
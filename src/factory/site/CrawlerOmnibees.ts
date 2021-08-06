import { CrawlerEntity } from "src/entities/Crawler";
import { CrawlerFactoryInterface } from "../CrawlerFactoryInterface";

export class Omnibees implements CrawlerFactoryInterface {
    result(): CrawlerEntity {
        throw new Error("Method not implemented.");
    }

    serch() {
        return 'asdad'
    }
    

}
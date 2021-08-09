import { Inject, Injectable } from '@nestjs/common';
import { CrawlerFactory } from '../factory/Factory';
import { CreateCrawlerDTO } from '../dto/CreateCrawlerDTO';

@Injectable()
export class CrawlerService {
  @Inject()
  factory: CrawlerFactory
  
  search(crawlerDTO: CreateCrawlerDTO) {
    return this.factory.init(crawlerDTO);
  }
}

import {
  Controller,
  Post,
  Body
} from '@nestjs/common';
import { CrawlerService } from '../../service/CrawlerService';
import { CreateCrawlerDTO } from '../../dto/CreateCrawlerDTO';

@Controller('search')
export class CrawlerController {
  constructor(private readonly crawlerService: CrawlerService) {}

  @Post()
  search(@Body() createCrawlerDTO: CreateCrawlerDTO) {
    return this.crawlerService.search(createCrawlerDTO);
  }

}

import { Module } from '@nestjs/common';
import { CrawlerController } from './controller/v1/CrawlerController';
import { CrawlerService } from './service/CrawlerService';

@Module({
  controllers: [CrawlerController],
  providers: [CrawlerService]
})
export class AppModule {}

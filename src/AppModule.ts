import { Module } from '@nestjs/common';
import { CrawlerController } from './controller/v1/CrawlerController';
import { CrawlerFactory } from './factory/Factory';
import { CrawlerService } from './service/CrawlerService';

@Module({
  controllers: [CrawlerController],
  providers: [CrawlerService, CrawlerFactory]
})
export class AppModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerFactoryENUM } from './entities/Crawler';
import { CrawlerFactory } from './factory/Factory';
import { Omnibees } from './factory/site/CrawlerOmnibees';
import { CrawlerService } from './service/CrawlerService';

const crawlerDTOMock = () => {
  return {
    "checkin": "2021-09-01",
    "checkout": "2021-09-03",
    "type": null
  }
}

const crawlerEntityMock = async () => {
  return [{
    "name": "Standard",
    "description": "Ideal para relaxar. Os quartos dispõem de diversos serviços para garantir uma estadia confortável e agradável. Todos os apartamentos Standar",
    "price": "R$ 1.501,00",
    "image": "https://media.omnibees.com/Images/5462/RoomTypes/189952.jpg"
  }]
}

describe('CrawlerFactory', () => {
  let sut: CrawlerFactory;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerFactory, Omnibees],
    }).compile();

    sut = module.get<CrawlerFactory>(CrawlerFactory)
  });

  it('should execute a OMNIBEES crawler', async () => {
    const dto = crawlerDTOMock()
    sut.crawler = sut.crawlerMap.get(dto.type ?? CrawlerFactoryENUM.OMNIBEES)
    jest.spyOn(sut.crawler, 'execute').mockImplementationOnce(async () => await new Promise<void>((res)=> res()) )
    const result = jest.spyOn(sut.crawler, 'execute')
    await sut.init(dto)
    
    expect(result).toBeCalledTimes(1)
  });

});

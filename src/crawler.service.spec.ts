import { Test, TestingModule } from '@nestjs/testing';
import { CrawlerFactory } from './factory/Factory';
import { CrawlerService } from './service/CrawlerService';

const crawlerDTOMock = () => {
  return {
    "checkin": "2021-09-01",
    "checkout": "2021-09-03"
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

describe('CrawlerService', () => {
  let sut: CrawlerService;
  let factory: CrawlerFactory;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrawlerService, CrawlerFactory],
    }).compile();

    sut = module.get<CrawlerService>(CrawlerService);
    factory = module.get<CrawlerFactory>(CrawlerFactory)
  });

  it('should call factory result', async () => {
    jest.spyOn(factory, 'result').mockImplementationOnce(async () => await crawlerEntityMock())
    const result = jest.spyOn(factory, 'result')
    sut.search(crawlerDTOMock())
    expect(result).toBeCalled()
  });
});

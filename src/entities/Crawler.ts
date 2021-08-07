export class CrawlerEntity {
    crawlerItems: CrawlerItem[]
}

class CrawlerItem {
    name: string // Room name 
    description: string // Room description 
    price: string // Room daily price 
    image: string // Room main photo
}

export enum CrawlerFactoryENUM {
    'OMNIBEES'= 'OMNIBEES'
}
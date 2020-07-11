import { Connection } from 'typeorm'
import { ProductRepository } from './repositories/product.repository'

export const productProviders = [
  {
    provide: 'PRODUCT_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(ProductRepository),
    inject: ['DATABASE_STORE_CONNECTION'],
  },
]

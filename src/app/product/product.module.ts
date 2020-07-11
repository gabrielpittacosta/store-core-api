import { Module } from '@nestjs/common'
import { ProductController } from './product.controller'
import { productProviders } from './product.providers'
import { ProductService } from './product.service'
import { DatabaseModule } from '../../database/database.module'

@Module({
  controllers: [ProductController],
  providers: [...productProviders, ProductService],
  imports: [DatabaseModule],
})
export class ProductModule {}

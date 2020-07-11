import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common'
import { ProductRepository } from './repositories/product.repository'
import { CreateProductDto } from './dtos/create-product.dto'

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: ProductRepository,
  ) {}

  async create(createProductDto: CreateProductDto, user: object) {
    try {
      if (user['role'] === 'STORAGE') {
        return await this.productRepository.createProduct(
          createProductDto,
          user['id'],
        )
      } else {
        return new HttpException('UNAUTHORIZED', HttpStatus.UNAUTHORIZED)
      }
    } catch (e) {
      console.log(e)
    }
  }
}

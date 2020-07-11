import { EntityRepository, Repository } from 'typeorm'
import { Product } from '../entities/product.entity'
import { CreateProductDto } from '../dtos/create-product.dto'

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  async findAll(): Promise<Product[]> {
    return await this.createQueryBuilder('products')
      .orderBy('ASC')
      .getMany()
  }

  async createProduct(createProductDto: CreateProductDto, userId: string) {
    return await this.createQueryBuilder('product')
      .insert()
      .into('product')
      .values({
        name: createProductDto.name,
        cashierId: userId,
        categoryId: createProductDto.categoryId,
        unitPrice: createProductDto.unitPrice,
        discontinued: createProductDto.discontinued,
        quantityPerUnit: createProductDto.quantityPerUnit,
      })
      .execute()
  }
}

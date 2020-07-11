import { IsNotEmpty } from 'class-validator'
import { Product } from '../entities/product.entity'

export class CreateProductDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  categoryId: string

  @IsNotEmpty()
  discontinued: boolean

  @IsNotEmpty()
  unitPrice: string

  @IsNotEmpty()
  quantityPerUnit: number

  constructor(partial: Product) {
    Object.assign(this, {
      name: partial.name,
      cashierId: partial.cashierId,
      categoryId: partial.categoryId,
      discontinued: partial.discontinued,
      quantityPerUnit: partial.quantityPerUnit,
      unitPrice: partial.unitPrice,
    })
  }
}

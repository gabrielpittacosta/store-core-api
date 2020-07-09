import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'product' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({
    name: 'name',
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  public name: string

  @Column({
    name: 'cashier_id',
    type: 'varchar',
    length: 244,
    nullable: false,
  })
  public cashierId: string

  @Column({
    name: 'category_id',
    type: 'varchar',
    length: 244,
    nullable: false,
  })
  public categoryId: string

  @Column({
    name: 'quantity_per_unit',
    type: 'integer',
    nullable: false,
  })
  public quantityPerUnit: number

  @Column({
    name: 'unit_price',
    type: 'float',
    nullable: false,
  })
  public unitPrice: number

  @Column({
    name: 'units_on_order',
    type: 'integer',
    nullable: false,
  })
  public unitsOnOrder: number

  @Column({
    name: 'discontinued',
    type: 'boolean',
    nullable: false
  })
  public discontinued: boolean
}
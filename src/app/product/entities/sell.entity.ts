import { Product } from './product.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity({ name: 'sell' })
export class Sell {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @ManyToMany(type => Product)
  @JoinTable()
  public products: Product[]

  @CreateDateColumn({ type: 'timestamp' })
  public sellDate: Date

  @Column({
    name: 'quantity_in_order',
    type: 'varchar',
    nullable: true,
    length: 244,
  })
  public quantityInOrder: object[]

  @CreateDateColumn({ type: 'timestamp' })
  private createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  private updatedAt: Date
}

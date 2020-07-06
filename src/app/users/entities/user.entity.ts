import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User{
  @PrimaryColumn()
  id: string

  @Column({
    name: 'name',
    type: 'varchar',
    length: 30,
    nullable: false
  })
  name: string

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 30,
    nullable: false
  })
  lastName: string

  @Column({
    name: 'email',
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true
  })
  email: string

  @Column({
    name: 'address_id',
    type: 'int',
    nullable: false
  })
  addressId: number

  @Column({
    name: 'role_id',
    type: 'int',
    nullable: false
  })
  roleId: number

  @Column({
    name: 'login',
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true
  })
  login: string

  @Column({
    name: 'password',
    type: 'varchar',
    length: 30,
    nullable: false
  })
  password: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}

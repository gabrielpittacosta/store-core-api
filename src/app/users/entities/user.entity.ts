import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { UserRole } from './user-role.entity'

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  public id: number

  @Column({
    name: 'name',
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  public name: string

  @Column({
    name: 'last_name',
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  public lastName: string

  @Column({
    name: 'email',
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true,
  })
  public email: string

  @Column({
    name: 'address_id',
    type: 'int',
    nullable: true,
  })
  public addressId: number

  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => UserRole,
    userRole => userRole.userId,
  )
  @Column({
    name: 'role_id',
    type: 'varchar',
    nullable: true,
  })
  public roleId: number

  @Column({
    name: 'login',
    type: 'varchar',
    length: 30,
    nullable: false,
    unique: true,
  })
  public login: string

  @Column({
    name: 'password',
    type: 'varchar',
    length: 30,
    nullable: false,
  })
  public password: string

  @CreateDateColumn({ type: 'timestamp' })
  private createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  private updatedAt: Date
}

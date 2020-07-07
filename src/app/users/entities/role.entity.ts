import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'role' })
export class UserRoles {
  @PrimaryColumn({ name: 'id' })
  private id: number

  @Column({ name: 'name' })
  private name: string
}

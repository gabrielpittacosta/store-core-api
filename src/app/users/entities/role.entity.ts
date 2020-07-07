import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { UserRole } from './user-role.entity'

@Entity({ name: 'role' })
export class UserRoles {
  @PrimaryColumn({ name: 'id' })
  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => UserRole,
    userRoles => userRoles.roleId,
  )
  @JoinColumn()
  public id: number

  @Column({ name: 'name' })
  private name: string
}

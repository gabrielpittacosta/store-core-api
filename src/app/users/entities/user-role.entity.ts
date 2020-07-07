import { Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm'
import { User } from './user.entity'
import { UserRoles } from './role.entity'

@Entity({ name: 'user_role' })
export class UserRole {
  @PrimaryColumn()
  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => User,
    user => user.roleId,
  )
  @JoinColumn()
  userId: number

  @PrimaryColumn()
  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => UserRoles,
    userRoles => userRoles.id,
  )
  @JoinColumn()
  roleId: number
}

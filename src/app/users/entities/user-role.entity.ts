import {
  Entity,
  JoinColumn,
  ManyToMany,
  OneToOne,
  PrimaryColumn,
} from 'typeorm'
import { User } from './user.entity'
import { UserRoles } from './role.entity'

@Entity({ name: 'user_role' })
export class UserRole {
  @PrimaryColumn({ type: 'uuid' })
  @OneToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => User,
    user => user.roleId,
  )
  @JoinColumn()
  public userId: string

  @PrimaryColumn()
  @ManyToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => UserRoles,
    userRoles => userRoles.id,
  )
  @JoinColumn()
  public roleId: number
}

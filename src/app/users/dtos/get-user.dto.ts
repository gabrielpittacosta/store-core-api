import { Exclude, Expose } from 'class-transformer'
import { UserRole } from '../enums/user-role.enum'

export class GetUserDto {
  @Exclude()
  id: number

  @Exclude()
  name: string

  @Exclude()
  lastName: string

  login: string

  @Exclude()
  email: string

  @Exclude()
  password: string

  @Exclude()
  roleId: UserRole

  @Exclude()
  addressId: number

  @Expose({ name: 'full_name' })
  get fullName(): string {
    return `${this.name} ${this.lastName}`
  }

  @Expose({ name: 'role' })
  get type(): string {
    let roleName: string
    switch (this.roleId['roleId']) {
      case (this.roleId['roleId'] = 1):
        roleName = 'CASH_REGISTER'
        break
      case (this.roleId['roleId'] = 2):
        roleName = 'MANAGER'
        break
      case (this.roleId['roleId'] = 3):
        roleName = 'CLEANING'
        break
      case (this.roleId['roleId'] = 4):
        roleName = 'STORAGE'
        break
    }

    return roleName
  }

  constructor(partial: Partial<GetUserDto>) {
    Object.assign(this, partial)
  }
}

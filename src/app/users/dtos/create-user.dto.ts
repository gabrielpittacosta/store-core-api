import { IsEmail, IsEnum, IsNotEmpty } from 'class-validator'
import { UserRole } from '../enums/user-role.enum'
import { User } from '../entities/user.entity'

export class CreateUserDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  lastName: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  login: string

  @IsNotEmpty()
  password: string

  @IsEnum(UserRole)
  role: number

  constructor(partial: User) {
    Object.assign(this, {
      name: partial.name,
      lastName: partial.lastName,
      email: partial.email,
      login: partial.login,
      password: partial.password,
      role: partial.roleId,
    })
  }
}

import { IsEmail, IsNotEmpty } from 'class-validator'
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

  constructor(partial: Partial<User>) {
    Object.assign(this, {
      name: partial.name,
      lastName: partial.lastName,
      email: partial.email,
      login: partial.login,
      password: partial.password
    })
  }
}

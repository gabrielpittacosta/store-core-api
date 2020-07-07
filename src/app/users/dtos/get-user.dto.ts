import { Expose } from 'class-transformer'
import { User } from '../entities/user.entity'
import { InsertResult } from 'typeorm'

export class GetUserDto {
  name: string

  @Expose({ name: 'last_name' })
  lastName: string

  login: string

  constructor(partial: any) {
    Object.assign(this, {
      name: partial.name,
      lastName: partial.lastName,
      login: partial.login,
    })
  }
}
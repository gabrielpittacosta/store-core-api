import { Entity } from "typeorm";

@Entity()
export class User {
  name: string

  lastName: string

  email: string

  addressId: number

  roleId: number

  login: string

  password: string
}
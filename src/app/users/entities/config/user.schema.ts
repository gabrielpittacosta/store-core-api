import {EntitySchema} from "typeorm";
import { User } from '../user.entity'
import { BaseColumnSchemaPart } from '../../../helpers/base-column-schema-part'

export const UserEntity = new EntitySchema<User>({
  name: 'user',
  columns: {
    ...BaseColumnSchemaPart,
    name: {
      name: 'name',
      type: String,
      length: 30
    },
    lastName: {
      name: 'last_name',
      type: String,
      length: 30
    },
    email: {
      name: 'email',
      type: String
    },
    addressId: {
      name: 'address_id',
      type: Number
    },
    roleId: {
      name: 'role_id',
      type: Number
    },
    login: {
      name: 'login',
      type: String,
      length: 40
    },
    password: {
      name: 'password',
      type: String,
      length: 18
    }
  }
})
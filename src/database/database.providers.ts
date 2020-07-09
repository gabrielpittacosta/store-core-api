import { createConnection } from 'typeorm'
import { User } from '../app/users/entities/user.entity'
import { UserRoles } from '../app/users/entities/role.entity'
import { UserRole } from '../app/users/entities/user-role.entity'
import { Product } from '../app/product/entities/product.entity'

export const databaseProviders = [
  {
    provide: 'DATABASE_STORE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: 5432,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_DATA_SOURCE,
        entities: [User, UserRoles, UserRole, Product],
        synchronize: true,
      }),
  },
]

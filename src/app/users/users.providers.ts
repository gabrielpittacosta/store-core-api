import { Connection } from 'typeorm'
import { UserRepository } from './repositories/user.repository'

export const userProviders = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(UserRepository),
    inject: ['DATABASE_STORE_CONNECTION'],
  },
]

import { createConnection } from 'typeorm'

export const databaseProviders = [
  {
    provide: 'DATABASE_STORE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: process.env.DABASE_HOST,
        port: Number(process.env.DABASE_PORT) || 5432,
        username: process.env.DABASE_USER,
        password: process.env.DABASE_PASSWORD,
        database: process.env.DABASE_DATA_SOUCE,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
]

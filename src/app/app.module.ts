import { forwardRef, Module } from '@nestjs/common'

import { UsersModule } from './users/users.module'
import { DatabaseModule } from '../database/database.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from './auth/auth.module'

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DatabaseModule, AuthModule],
})
export class AppModule {}

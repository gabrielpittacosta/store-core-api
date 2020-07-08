import { forwardRef, Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { userProviders } from './users.providers'
import { DatabaseModule } from '../../database/database.module'
import { AuthModule } from '../auth/auth.module'
import { AuthService } from '../auth/auth.service'

@Module({
  controllers: [UsersController],
  providers: [...userProviders, UsersService],
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}

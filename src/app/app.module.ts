import { Module } from '@nestjs/common'

import { UsersModule } from './users/users.module'
import { DatabaseModule } from '../database/database.module'
import { ConfigModule } from '@nestjs/config'
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), UsersModule, DatabaseModule, AuthModule],
  providers: [AuthService],
})
export class AppModule {}

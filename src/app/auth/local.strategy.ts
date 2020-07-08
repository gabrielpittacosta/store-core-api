import { Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { AuthService } from './auth.service'
import { GetUserDto } from '../users/dtos/get-user.dto'

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super()
  }

  async validate(login: string, password: string): Promise<any> {
    const user = await this.authService
      .validateUser(login, password)
      .then(user => new GetUserDto(user))

    if (!user) {
      throw new UnauthorizedException()
    }

    return user
  }
}

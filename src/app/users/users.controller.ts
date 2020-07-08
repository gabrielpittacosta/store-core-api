import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './entities/user.entity'
import { GetUserDto } from './dtos/get-user.dto'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '../auth/auth.service'

@Controller('api/v1/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user)
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get(':user_id')
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('user_id') id: number): Promise<GetUserDto> {
    return this.usersService.findOne(id).then(user => new GetUserDto(user))
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Put()
  async update() {
    return
  }

  @Delete(':user_id')
  async delete(@Param('user_id') id: number) {
    return this.usersService.deleteUser(id)
  }
}

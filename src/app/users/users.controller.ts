import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req, UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './entities/user.entity'
import { GetUserDto } from './dtos/get-user.dto'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '../auth/auth.service'
import { HttpExceptionFilter } from '../filters/http-exception.filter'

@Controller('api/v1/users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  @UseFilters(new HttpExceptionFilter())
  async login(@Req() req) {
    return this.authService.login(req.user)
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get(':user_id')
  @UseGuards(AuthGuard('jwt'))
  @UseInterceptors(ClassSerializerInterceptor)
  async findOne(@Param('user_id') id: string): Promise<GetUserDto> {
    return this.usersService.findOne(id).then(user => new GetUserDto(user))
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<User[]> {
    return this.usersService.findAll()
  }

  @Put()
  @UseGuards(AuthGuard('jwt'))
  async update() {
    return
  }

  @Delete(':user_id')
  @UseGuards(AuthGuard('jwt'))
  async delete(@Param('user_id') id: number) {
    return this.usersService.deleteUser(id)
  }
}

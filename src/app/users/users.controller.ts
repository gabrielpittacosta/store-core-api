import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dtos/create-user.dto'
import { User } from './entities/user.entity'

@Controller('api/v1/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @Get(':user_id')
  async findOne(@Param('user_id') id: number): Promise<User> {
    return this.usersService.findOne(id)
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

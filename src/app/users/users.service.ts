import { Inject, Injectable } from '@nestjs/common'
import { User } from './entities/user.entity'
import { UserRepository } from './repositories/user.repository'
import { CreateUserDto } from './dtos/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: UserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll()
  }

  async findOne(id: string) {
    return await this.userRepository.findById(id)
  }

  async findByLogin(login: string) {
    return await this.userRepository.findByLogin(login)
  }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.createUser(createUserDto)
  }

  async deleteUser(id: number) {
    return await this.userRepository.deleteUser(id)
  }
}

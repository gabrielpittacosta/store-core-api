import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dtos/create-user.dto'
import { UserRole } from '../entities/user-role.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAll(): Promise<User[]> {
    return await this.createQueryBuilder('users').getMany()
  }

  async findOneUser(id: number): Promise<User> {
    return await this.createQueryBuilder('user')
      .leftJoinAndSelect('user.roleId', 'r', 'user.id = r.userId')
      .where(`user.id = ${id}`)
      .getOne()
  }

  async createUser(createUserDto: CreateUserDto) {
    return this.createQueryBuilder('users')
      .insert()
      .values([
        {
          name: createUserDto.name,
          lastName: createUserDto.lastName,
          email: createUserDto.email,
          login: createUserDto.login,
          password: createUserDto.password,
          roleId: createUserDto.role,
        },
      ])
      .insert()
      .into(UserRole)
      .values({ userId: 1, roleId: createUserDto.role })
      .execute()
  }

  async deleteUser(id: number) {
    return this.createQueryBuilder('user')
      .delete()
      .where(`id = ${id}`)
      .execute()
  }
}

import { EntityRepository, Repository } from 'typeorm'
import { User } from '../entities/user.entity'
import { CreateUserDto } from '../dtos/create-user.dto'
import { UserRole } from '../entities/user-role.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAll(): Promise<User[]> {
    return await this.createQueryBuilder('users')
      .orderBy('ASC')
      .getMany()
  }

  async findById(id: string): Promise<User> {
    return await this.createQueryBuilder('user')
      .leftJoinAndSelect('user.roleId', 'r', 'user.id = r.userId')
      .where(`user.id = ${id}`)
      .getOne()
  }

  async findByLogin(login: string): Promise<User> {
    return await this.createQueryBuilder('user')
      .leftJoinAndSelect('user.roleId', 'r', 'user.id = r.userId')
      .where(`user.login = '${login}'`)
      .getOne()
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this.createQueryBuilder('users')
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
      .execute()
      .then(user => {
        this.createQueryBuilder('user-role')
          .insert()
          .into(UserRole)
          .values({
            userId: user.identifiers.map(userId => userId.id).toString(),
            roleId: createUserDto.role,
          })
          .execute()
      })
  }

  async deleteUser(id: number) {
    return this.createQueryBuilder('user')
      .delete()
      .where(`id = ${id}`)
      .execute()
  }
}

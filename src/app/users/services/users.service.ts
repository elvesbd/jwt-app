import { Inject, Injectable } from '@nestjs/common';
import { FindConditions } from 'typeorm';
import { CreateUserDto } from '../infra/dto/create-user.dto';
import { UpdateUserDto } from '../infra/dto/update-user.dto';
import { UserEntity } from '../infra/entity/user.entity';
import { UsersRepositories } from '../repositories/users-repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepositories: UsersRepositories) {}

  async findAll() {
    return await this.usersRepositories.findAll();
  }

  async findOneOrFail(conditions: FindConditions<UserEntity>) {
    return await this.usersRepositories.findOneOrFail(conditions);
  }

  async store(data: CreateUserDto) {
    return await this.usersRepositories.store(data);
  }

  async update(id: string, data: UpdateUserDto) {
    return await this.usersRepositories.update(id, data);
  }

  async destroy(id: string) {
    return await this.usersRepositories.destroy(id);
  }
}

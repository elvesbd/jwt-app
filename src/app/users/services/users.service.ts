import { Injectable } from '@nestjs/common';
import { UsersRepositories } from '../repositories/users-repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepositories: UsersRepositories) {}

  async findAll() {
    return await this.usersRepositories.findAll();
  }

  async findOneOrFail(conditions, options) {
    return await this.usersRepositories.findOneOrFail(conditions, options);
  }

  async update(id: string, data) {
    return await this.usersRepositories.update(id, data);
  }

  async destroy(id: string) {
    return await this.usersRepositories.destroy(id);
  }
}

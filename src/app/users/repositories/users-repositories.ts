import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, FindOneOptions } from 'typeorm';
import { UserEntity } from '../infra/entity/user-entity';
import { UsersRepository } from '../infra/typeorm/users-repository';

@Injectable()
export class UsersRepositories {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {}

  async findAll() {
    return await this.usersRepository.find({
      select: ['id', 'firstName', 'lastName', 'email'],
    });
  }

  async findOneOrFail(
    conditions: FindConditions<UserEntity>,
    options?: FindOneOptions<UserEntity>,
  ) {
    try {
      return await this.usersRepository.findOneOrFail(conditions, options);
    } catch (e) {
      throw new NotFoundException(e.message);
    }
  }

  async update(id: string, data) {
    const user = await this.findOneOrFail({ id });
    this.usersRepository.merge(user, data);
    return await this.usersRepository.save(user);
  }

  async destroy(id: string) {
    await this.usersRepository.findOneOrFail({ id });
    this.usersRepository.softDelete({ id });
  }
}

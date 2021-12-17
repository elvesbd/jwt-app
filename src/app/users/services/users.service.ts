import { Injectable } from '@nestjs/common';
import { UsersRepositories } from '../repositories/users-repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepositories: UsersRepositories) {}
}

import { Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async index() {
    return null;
  }

  @Post()
  async store() {
    return null;
  }

  @Get(':id')
  async show() {
    return null;
  }

  @Patch(':id')
  async update() {
    return null;
  }

  @Delete(':id')
  async destroy() {
    return null;
  }
}

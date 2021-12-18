import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users.controller';
import { UsersRepository } from './infra/typeorm/users-repository';
import { UsersRepositories } from './repositories/users-repositories';
import { UsersService } from './services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [UsersController],
  providers: [UsersService, UsersRepositories],
  exports: [UsersService],
})
export class UsersModule {}

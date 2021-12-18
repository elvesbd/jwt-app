import { Injectable } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { IUser } from 'src/app/users/infra/interfaces/user-interface';
import { UsersService } from 'src/app/users/services/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    let user: IUser;
    try {
      user = await this.usersService.findOneOrFail({ email });
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }
}
// Return is null in AuthService so that it falls into the most generic error of the local strategy

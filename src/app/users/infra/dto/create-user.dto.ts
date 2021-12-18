import { IsNotEmpty, Matches } from 'class-validator';
import { MessagesHelper } from 'src/helpers/messages.helpers';
import { RegexHelper } from 'src/helpers/regex-helper';

export class CreateUserDto {
  @IsNotEmpty({ message: 'o primeiro nome não deve estar vazio' })
  firstName: string;

  @IsNotEmpty({ message: 'o último nome não deve estar vazio' })
  lastName: string;

  @IsNotEmpty({ message: 'e-mail não deve estar vazio' })
  @Matches(RegexHelper.EMAIL, { message: MessagesHelper.EMAIL_VALID })
  email: string;

  @IsNotEmpty()
  @Matches(RegexHelper.PASSWORD, {
    message: MessagesHelper.PASSWORD_VALID,
  })
  password: string;
}

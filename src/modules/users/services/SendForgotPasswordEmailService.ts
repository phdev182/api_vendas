import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UserTokensRepository from '../typeorm/repositories/UsersTokensRepository';
import UsersRepository from '../typeorm/repositories/UsersRepository';

interface IRequest {
  email: string;
}

class SendForgotPasswordEmailService {
  public async execute({ email }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const userTokensRepository = getCustomRepository(UserTokensRepository);

    const user = await usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User dos not exists.');
    }
    console.log(user);
    const token = await userTokensRepository.generate(user.id);
    console.log(token);
  }
}

export default SendForgotPasswordEmailService;

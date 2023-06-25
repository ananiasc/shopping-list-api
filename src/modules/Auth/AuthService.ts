import { User } from '../../entities/User';
import { IUAuthRepository } from '../../repositories/IUAuthRepositories';

class AuthService {
  constructor(private authRepository: IUAuthRepository) {}

  async exist(user: User) {
    try {
      const exist: boolean = await this.authRepository.exist(user);
      return exist;
    } catch (error) {
      throw error;
    }
  }

  async create(user: User) {
    try {
      const createUSer: User = await this.authRepository.create(user);
      return createUSer;
    } catch (error) {
      throw error;
    }
  }
}

export { AuthService };

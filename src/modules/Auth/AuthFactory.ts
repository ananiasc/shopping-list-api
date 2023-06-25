import { PrismaAuthRepository } from '../../repositories/prisma/PrismaAuthRepository';
import { AuthService } from './AuthService';
import { AuthControler } from './AuthController';

export const authFactory = () => {
  const authRepository = new PrismaAuthRepository();
  const authService = new AuthService(authRepository);
  const authController = new AuthControler(authService);
  return authController;
};

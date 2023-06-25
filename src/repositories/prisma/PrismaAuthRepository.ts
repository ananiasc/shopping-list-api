import { Prisma } from '@prisma/client';
import { prismaClient } from '../../database/prismaClient';
import { IUAuthRepository } from '../IUAuthRepositories';
import { User } from '../../entities/User';

class PrismaAuthRepository implements IUAuthRepository {
  async exist(user: User): Promise<boolean> {
    try {
      const userExist = await prismaClient.user.findUnique({
        where: {
          username: user.username,
        },
      });
      return userExist ? true : false;
    } catch (error) {
      throw error;
    }
  }

  async create(user: User) {
    const userCreate = {
      fullname: user.fullname,
      username: user.username,
      password: user.password,
    };
    try {
      const createUser = await prismaClient.user.create({ data: userCreate });
      return createUser;
    } catch (error) {
      throw error;
    }
  }
}

export { PrismaAuthRepository };

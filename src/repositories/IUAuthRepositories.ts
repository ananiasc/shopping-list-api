import { User } from "../entities/User";

interface IUAuthRepository {
  exist(user: User): Promise<boolean>;
  create(user: User): Promise<any>;
}

export { IUAuthRepository };

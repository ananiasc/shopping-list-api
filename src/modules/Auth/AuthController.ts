import { NextFunction, Request, Response } from 'express';
import { AuthService } from './AuthService';
import { User } from '../../entities/User';
const bcrypt = require('bcrypt');

class AuthControler {
  constructor(private authService: AuthService) {}

  async createUser(request: Request, response: Response, next: NextFunction) {
    try {
      const { fullname, username, password } = request.body;

      if (fullname === undefined || fullname === '')
        return response.status(422).json({ message: 'fullname invalid' });

      if (fullname.split(' ').length < 2)
        return response
          .status(422)
          .json({ message: 'fullname must contain first and last name' });

      if (username === undefined || username === '')
        return response.status(422).json({ message: 'username invalid' });

      if (password === undefined || password === '')
        return response.status(422).json({ message: 'password invalid' });

      if (password.length < 8)
        return response
          .status(422)
          .json({ message: 'password must contain at least 8 characters' });

      const userExist: boolean = await this.authService.exist({ username });

      if (userExist)
        return response
          .status(422)
          .json({ message: 'username already exists' });

      const salt = await bcrypt.genSalt(12);
      const passwordHash = await bcrypt.hash(password, salt);
      const user: User = {
        fullname,
        username,
        password: passwordHash,
      };

      this.authService.create(user);

      return response
        .status(200)
        .json({ success: 'user created successfully' });
    } catch (error) {
      return next(error);
    }
  }
}

export { AuthControler };

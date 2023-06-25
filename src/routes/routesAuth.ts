import { NextFunction, Router, response } from 'express';
import { authFactory } from '../modules/Auth/AuthFactory';

const routesAuth = Router();

routesAuth.get('/', function (req, res) {
  res.json({ status: 'success', body: req.body });
});

routesAuth.post('/register', (request, response, next) =>
  authFactory().createUser(request, response, next)
);

export { routesAuth };

import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionsService';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(users);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;

      const createUser = new CreateUserService();

      const user = await createUser.execute({
        name,
        email,
        password,
      });

      return response.json(user);
    } catch (error: any) {
      return response.status(error.statusCode).json(error);
    }
  }

  public async createSession(
    request: Request,
    response: Response,
  ): Promise<Response> {
    try {
      const { email, password } = request.body;

      const createUser = new CreateSessionService();

      const user = await createUser.execute({
        email,
        password,
      });

      return response.json(user);
    } catch (error: any) {
      return response.status(error.statusCode).json(error);
    }
  }
}

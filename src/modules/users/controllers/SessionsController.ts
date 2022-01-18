import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionsService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { email, password } = request.body;

      const createSession = new CreateSessionService();

      const result = await createSession.execute({
        email,
        password,
      });

      return response.json(result);
    } catch (error: any) {
      return response.status(500).json(error);
    }
  }
}

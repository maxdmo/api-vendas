import productsRouter from '@modules/products/routes/products.routes';
import authRoutes from '@modules/users/routes/auth.routes';
import usersRouter from '@modules/users/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/products', productsRouter);
routes.use('/users', usersRouter);
routes.use('/auth', authRoutes);

export default routes;

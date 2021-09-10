import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  name: string;
  price: number;
  base_value: number;
  quantity: number;
}

class CreateProductService {
  public async execute({
    name,
    price,
    base_value,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('Product already exists');
    }

    const product = productsRepository.create({
      name,
      price,
      base_value,
      quantity,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default { CreateProductService };

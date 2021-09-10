import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Product from '../typeorm/entities/Product';
import { ProductRepository } from '../typeorm/repositories/ProductsRepository';

interface IRequest {
  id: string;
  name: string;
  price: number;
  base_value: number;
  status: boolean;
  quantity: number;
}

class UpdateProductService {
  public async execute({
    id,
    name,
    price,
    base_value,
    status,
    quantity,
  }: IRequest): Promise<Product> {
    const productsRepository = getCustomRepository(ProductRepository);

    const product = await productsRepository.findOne(id);

    if (!product) {
      throw new AppError('Product not found.');
    }

    const productExists = await productsRepository.findByName(name);

    if (productExists) {
      throw new AppError('Product already exists with the same name.');
    }

    product.name = name;
    product.price = price;
    product.base_value = base_value;
    product.quantity = quantity;
    product.status = status;

    await productsRepository.save(product);

    return product;
  }
}

export default UpdateProductService;

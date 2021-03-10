import { getCustomRepository } from 'typeorm';
import Product from '../tyeorm/entities/Product';
import { ProductRepository } from './../tyeorm/repositories/Products.Repository';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = getCustomRepository(ProductRepository);

    const products = productsRepository.find()
      return products;
    };
}
export default ListProductService;

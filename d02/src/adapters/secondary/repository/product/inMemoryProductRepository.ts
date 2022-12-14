import { ProductRepository } from './productRepository'
import { Product } from '../../../../core/entities/product'
import { UUIDGenerator } from '../../services/UUIDGenerator'
import { CreateProductDTO } from '../../../primary/dto/createProductDTO'

export class InMemoryProductRepository implements ProductRepository {
  private products: Array<Product> = []
  private uuidGenerator: UUIDGenerator

  constructor(uuidGenerator: UUIDGenerator) {
    this.uuidGenerator = uuidGenerator
  }

  listAll(): Promise<Array<Product>> {
    return Promise.resolve(this.products)
  }

  feedWith(...products: Array<Product>) {
    this.products = products
  }

  create(createProductDTO: CreateProductDTO): Promise<Product> {
    const product: Product = {
        id: this.uuidGenerator.generate(),
        name: createProductDTO.name,
        price: createProductDTO.price
    }
    this.products.push(product)
    return Promise.resolve(product)
  }
}

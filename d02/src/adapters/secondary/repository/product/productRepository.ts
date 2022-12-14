import { Product } from '../../../../core/entities/product'
import { CreateProductDTO } from '../../../primary/dto/createProductDTO'

export interface ProductRepository {
  listAll(): Promise<Array<Product>>
  create(createProductDTO: CreateProductDTO): Promise<Product>
}

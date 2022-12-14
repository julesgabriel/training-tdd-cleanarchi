import { useProductStore } from '../../../../store/productStore'
import { ProductRepository } from '../../../../adapters/secondary/repository/product/productRepository'
import { CreateProductDTO } from '../../../../adapters/primary/dto/createProductDTO'

export const createProduct = async (createProductDTO: CreateProductDTO, productGateway: ProductRepository) => {
  const productStore = useProductStore()
  const created = await productGateway.create(createProductDTO)
  productStore.add(created)
}

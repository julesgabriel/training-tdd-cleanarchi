import { useProductStore } from '../../../../store/productStore'
import { ProductRepository } from '../../../../adapters/secondary/repository/product/productRepository'

export const listAllProducts = async (productGateway: ProductRepository) => {
  const products = await productGateway.listAll()
  const productStore = useProductStore()
  productStore.list(products)
}

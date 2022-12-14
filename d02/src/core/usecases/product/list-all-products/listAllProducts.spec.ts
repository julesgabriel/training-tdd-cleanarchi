import { useProductStore } from '../../../../store/productStore'
import { createPinia, setActivePinia } from 'pinia'
import { listAllProducts } from './listAllProducts'
import { InMemoryProductRepository } from '../../../../adapters/secondary/repository/product/inMemoryProductRepository'
import { Product } from '../../../entities/product'
import { FakeUUIDGenerator } from '../../../../adapters/secondary/services/fakeUUIDGenerator'

describe('List all products', () => {
  let productGateway: InMemoryProductRepository
  beforeEach(() => {
    setActivePinia(createPinia())
    productGateway = new InMemoryProductRepository(new FakeUUIDGenerator())
  })
  it('should have [] when there is no product', async () => {
    await whenListAllProducts()
    expectProductStoreToContains()
  })
  it('should store all products when there is product', async () => {
    const tshirt: Product = {
      id: 'abc123',
      name: 'Tshirt super cool',
      price: 1000
    }
    const pull: Product = {
      id: 'def465',
      name: 'Pull de noel',
      price: 2999
    }
    productGateway.feedWith(tshirt, pull)
    await whenListAllProducts()
    expectProductStoreToContains(tshirt, pull)
  })

  const whenListAllProducts = async () => {
    await listAllProducts(productGateway)
  }

  const expectProductStoreToContains = (...products: Array<any>) => {
    const productStore = useProductStore()
    expect(productStore.items).toEqual(products)
  }
})

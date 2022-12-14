import {InMemoryProductRepository} from '../inMemoryProductRepository'
import {Product} from '../../../../../core/entities/product'
import {FakeUUIDGenerator} from "../../../services/fakeUUIDGenerator";

const uuidGenerator = new FakeUUIDGenerator()
const populateInMemoryWithProducts = new InMemoryProductRepository(uuidGenerator)
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
populateInMemoryWithProducts.feedWith(tshirt, pull)
export default populateInMemoryWithProducts

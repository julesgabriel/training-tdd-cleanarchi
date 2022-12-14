import {InMemoryProductRepository} from "../../../../adapters/secondary/repository/product/inMemoryProductRepository";
import populateInMemoryWithProducts
    from "../../../../adapters/secondary/repository/product/utils/populateInMemoryWithProducts";
import {InMemoryCartRepository} from "../../../../adapters/secondary/repository/cart/inMemoryCartRepository";
import {addProductToCart} from "./addProductToCart";
import {createPinia, setActivePinia} from "pinia";
import {useCartStore} from "../../../../store/cartStore";

describe('add product to cart', function () {
    let productRepository: InMemoryProductRepository
    let cartRepository: InMemoryCartRepository
    const idToInsert = "def465"

    beforeEach(async () => {
        setActivePinia(createPinia())
        productRepository = populateInMemoryWithProducts
        cartRepository = new InMemoryCartRepository(productRepository)
    })

    describe('Repository', () => {
        it('should add a product to repository', async function () {
            await addProductToCart(idToInsert, cartRepository)
            const result = await cartRepository.listCart()
            await expect(result.find(el => el === idToInsert)).toEqual(idToInsert)
        });
    })

    describe('Store', () => {
        it('should check if the product is inserted in the store when an id is provided', async () => {
            const cartRepository = new InMemoryCartRepository(productRepository)
            const cartStore = useCartStore()
            await addProductToCart(idToInsert, cartRepository)
            expect(cartStore.getItems()).toEqual([{
                    id: 'def465',
                    name: 'Pull de noel',
                    price: 2999
                }]
            )
        })

        it('should check if the cart contain the product given when product are alreasy in', async () => {
            const cartRepository = new InMemoryCartRepository(productRepository)
            await addProductToCart("abc123", cartRepository)
            const cartStore = useCartStore()
            await addProductToCart(idToInsert, cartRepository)
            expect(cartStore.getItems().find(el => el.id === idToInsert)).toEqual({
                    id: 'def465',
                    name: 'Pull de noel',
                    price: 2999
                }
            )
        })

        it('should return true when product is added to basket', async () => {
            const cartRepository = new InMemoryCartRepository(productRepository)
            expect(await addProductToCart("abc123", cartRepository)).toBe(true)
        })
    })
});
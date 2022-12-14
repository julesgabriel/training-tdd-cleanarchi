import {CartRepository} from "../../../../adapters/secondary/repository/cart/cartRepository";
import {useCartStore} from "../../../../store/cartStore";
import {Product} from "../../../entities/product";

export const addProductToCart = async (id: string, cartRepository: CartRepository): Promise<boolean> => {
    const productInserted = await cartRepository.addToCart(id)
    const cartStore = useCartStore()
    cartStore.add(productInserted as Product)
    return Promise.resolve(true)
}
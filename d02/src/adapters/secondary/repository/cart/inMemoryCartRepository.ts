import {CartRepository} from "./cartRepository";
import {Product} from "../../../../core/entities/product";
import {ProductRepository} from "../product/productRepository";

export class InMemoryCartRepository implements CartRepository {
    cart: Array<string> = []
    allProducts: Array<Product>

    constructor(private productRepository: ProductRepository) {
    }

    async addToCart(idProduct: string): Promise<Product | boolean> {
        this.allProducts = await this.productRepository.listAll()
        const product = {...this.allProducts.filter(el => el.id === idProduct)[0]}
        this.cart.push(product.id)
        return Promise.resolve(product)
    }

    async listCart(): Promise<Array<string>> {
        return this.cart
    }
}
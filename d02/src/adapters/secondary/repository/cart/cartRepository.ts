import {Product} from "../../../../core/entities/product";

export type CartResponse = {
    status: boolean
    cause?: string
}

export interface CartRepository {
    addToCart(id: string): Promise<Product | boolean>
    listCart(): Promise<Array<string>>
}
import { defineStore } from 'pinia'
import { Product } from '../core/entities/product'

export const useCartStore = defineStore('CartStore', {
  state: () => {
    return {
      items: [] as Array<Product>
    }
  },
  actions: {
    getItems(): Array<Product>{
      return this.items
    },
    getItemById(id: string): Product {
      return this.items.find(el => el.id === el)
    },
    add(product: Product) {
      this.items.push(product)
    }
  }
})

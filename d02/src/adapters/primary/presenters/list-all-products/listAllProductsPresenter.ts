import { useProductStore } from '../../../../store/productStore'

export interface ListAllProductsItemVM {
  id: string
  name: string
  price: string
}

export interface ListAllProductsPresenter {
  items: Array<ListAllProductsItemVM>
}

export const listAllProductsVM = (): ListAllProductsPresenter => {
  const productStore = useProductStore()
  return {
    items: productStore.items.map(product => {
      return {
        id: product.id,
        name: product.name.toUpperCase(),
        price: `${product.price / 100} €`
      }
    })
  }
}

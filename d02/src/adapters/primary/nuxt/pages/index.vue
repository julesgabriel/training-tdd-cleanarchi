<template>
  <h1>Coucou</h1>
  <div v-for="product in allProductsVM.items" :key="product.id">
    <div>{{product.name}}: {{product.price}}</div>
  </div>

  <div>
    <input :value="createVM.name" @input="handleNameChanged">
    <p v-if="!createVM.isNameValid">Erreur du nom</p>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref } from '../../../../../.nuxt/imports'
import { listAllProducts } from '../../../../core/usecases/product/list-all-products/listAllProducts'
import { listAllProductsVM } from '../../presenters/list-all-products/listAllProductsPresenter'
import populateInMemoryWithProducts from '../../../secondary/repository/product/utils/populateInMemoryWithProducts'
import { createProductVM } from '../../presenters/create-product/createProductVM'

onMounted(() => {
  listAllProducts(populateInMemoryWithProducts)
})

const handleNameChanged = (e: any) => {
  createVM.value.name = e.target.value
}

const createVM = ref(createProductVM())

const allProductsVM = computed(() => {
  return listAllProductsVM()
})

</script>

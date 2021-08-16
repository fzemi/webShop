<template>
    <div class="main-page">
      <div class="shopping-cart">
        <ShoppingCart :products="products"/>
      </div>
      <div class="products">
        <ProductCard v-for="product in products" :key="product.id" :product="product" v-on:maximize="maximize($event)"/>
      </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import products from '../data/products.js'

export default {
    name: 'Shop',
    components: {
        ProductCard,
        ShoppingCart,
    },
    data: () => {
        return {
          products: products,
          product: null
        }
    },
    methods: {
        maximize(product) {
            this.product = product
            console.log(this.product) /* 40 minuta */
        }
    }
};
</script>

<style scoped>
#cart-size {
  margin: 0px 8px 8px 8px;
}
.main-page {
  display: flex;
}
.shopping-cart {
  margin: 2rem;
}
.products {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 2rem;
}
</style>
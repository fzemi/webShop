<template>
    <div class="main-page">
      <div class="shopping-cart">
        <ShoppingCart :product="product" :products="products"/>
      </div>
      <div class="product-maximize" v-if="onMaximize">
        <ProductCardMaximize v-for="product in productOnMaximize" :key="product.id" :product="product" v-on:closeMaximize="closeMaximize()"/>
      </div>
      <div class="products" v-else>
        <ProductCard v-for="product in products" :key="product.id" :product="product" v-on:maximize="maximize($event)"/>
      </div>
    </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
import ProductCardMaximize from '../components/ProductCardMaximize.vue'
import products from '../data/products.js'

export default {
    name: 'Shop',
    components: {
        ProductCard,
        ShoppingCart,
        ProductCardMaximize
    },
    data: () => {
        return {
          products: products,
          product: null,
          onMaximize: false,
          productOnMaximize: []
        }
    },
    methods: {
        maximize(product) {
            this.productOnMaximize.push(product)
            this.onMaximize = true
        },
        closeMaximize() {
          this.onMaximize = false
          this.productOnMaximize = []
        }
    }
};
</script>

<style scoped>
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
.product-maximize {
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-right: 10rem;
}
</style>
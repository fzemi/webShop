<template>
  <div id="app">
    <NavBar/>
    <div class="main-page">
      <div class="shopping-cart">
        <ShoppingCart/>
      </div>
      <div class="products">
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProductCard from './components/ProductCard.vue'
import ShoppingCart from './components/ShoppingCart.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ProductCard,
    ShoppingCart
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
</style>


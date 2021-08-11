<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Contact</h5>
      <p class="card-text">Some information about contact.</p>
      <p class="card-text">Cart ( 3 )</p>   <!-- zmienić 3 na zmienną wartość  -->
    </div>
    <div class="card-body border-2 border-rounded border-dash" id="cart-size">
      <ul class="list-group list-group-flush" v-if="cartQuantity">
        <li class="list-group-item" v-for="product in products" :key="product.id">{{cartQuantity}}x {{product.name}}</li>
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
      </ul>
    </div>
  </div>
</template>

<script>
import products from '../data/products.js'

export default {
  name: "ShoppingCart",
  data () {
        return {
          products: products,
          product: null
        }
  },
  computed: {
    cartQuantity() {
      return this.$store.getters.cartQuantity(this.product)
    }
  }
};
</script>

<style scoped>
#cart-size {
  margin: 0px 8px 8px 8px;
}

.border-dash {
    border-style: dashed;
}

.border-rounded {
    border-radius: 10px;
}
</style>
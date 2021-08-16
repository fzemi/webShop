<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Contact</h5>
      <p class="card-text">Some information about contact.</p>
      <p class="card-text">Cart ( {{cartQuantity}} )</p>
    </div>
    <div class="card-body border-2 border-rounded border-dash" id="cart-size">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center" v-if="cartQuantity === 0">Empty!</li>
        <li class="list-group-item" v-else v-for="product in products" :key="product.id">
            <span v-if="productQuantityInCart(product) !== 0">{{productQuantityInCart(product)}}x {{product.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "ShoppingCart",
  props: ['products', 'product'],
  computed: {
    cartQuantity() {
      return this.$store.getters.cartQuantity
    }
  },
  methods: {
    productQuantityInCart(product) {
      return this.$store.getters.productQuantityInCart(product)
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
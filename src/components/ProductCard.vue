<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo.png" class="card-img-top" @click="$emit('maximize', product)"/>
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div class="center">
        <a @click="decrementQuantity" class="btn btn-danger btn-no-radius btn-add-remove rounded-start">-</a>
        <a @click="makeOrder" class="btn btn-primary btn-no-radius">Quantity: {{productQuantity}}</a>
        <a @click="incrementQuantity" class="btn btn-success btn-no-radius btn-add-remove rounded-end">+</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductCard",
  props: ['product'],
  methods: {
    incrementQuantity() {
      this.$store.commit('incrementQuantity', this.product)
    },
    decrementQuantity() {
      this.$store.commit('decrementQuantity', this.product)
    },
    makeOrder() {
      this.$store.commit('makeOrder', this.product)
    }
  },
  computed: {
    productQuantity() {
      return this.$store.getters.productQuantity(this.product)
    }
  }
};
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
}
.btn-no-radius {
    border-radius: 0px;
}
.btn-add-remove {
    width: 40px;
}
.btn {
    height: 40px;
}
</style>
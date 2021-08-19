<template>
  <div class="card" style="width: 18rem">
    <img :src="'../assets/' + product.image" class="card-img-top open-card img-size" title="Click to maximize" @click="$emit('maximize', product)"/>
    <div class="card-body">
      <div class="position-relative">
        <h5 class="card-title position-absolute">{{product.name}}</h5>
        <h6 class="card-title end">Price: {{product.price}}$</h6>
      </div>
      <p class="card-text text-truncate">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div class="center">
        <a @click="decrementQuantity" class="btn btn-danger btn-no-radius btn-add-remove rounded-start">-</a>
        <a @click="makeOrder" class="btn btn-primary btn-no-radius" style="width: 120px" @mouseover="toAdd = true" @mouseleave="toAdd = addedToCart = false">
          <span v-if="toAdd && productQuantity !== 0" @click="addedToCart = true">Add to cart?</span>
          <span v-else-if="addedToCart">Added</span>
          <span v-else-if="!addedToCart">Quantity: {{productQuantity}}</span>
        </a>
        <a @click="incrementQuantity" class="btn btn-success btn-no-radius btn-add-remove rounded-end">+</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProductCard",
  props: ['product'],
  data: () => {
    return {
      toAdd: false,
      addedToCart: false
    }
  },
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
    },
    
  }
};
</script>

<style scoped>
.center {
    display: flex;
    justify-content: center;
}
.end {
  text-align: end;
  margin-right: 5px;
  padding-top: 4px;
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
.open-card {
  cursor: pointer;
}
.img-size {
  height: 300px;
}
</style>
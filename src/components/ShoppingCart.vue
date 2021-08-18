<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Contact</h5>
      <p class="card-text">Some information about contact.</p>
      <p class="card-text">Cart ( {{cartQuantity}} )</p>
    </div>
    <div class="card-body border-2 border-rounded border-dash" id="cart-size">
      <ul class="list-group list-group-flush">
        <li class="list-group-item text-center" v-if="cartQuantity === 0">Cart is empty</li>
        <li id="clearButtonApear" class="list-group-item" v-else v-for="product in visibleCartElements" :key="product.id">
            <span v-if="productQuantityInCart(product) !== 0">
              <span>{{productQuantityInCart(product)}}x {{product.name}}</span>
              <img class="removeButton" src="../assets/x_icon.png" @click="removeFromCart(product)"/>
            </span>
        </li>
      </ul>
    </div>
    <div class="bottom" v-if="cartQuantity !== 0">
      <h4 class="card-body"><span class="badge bg-secondary">Amount to pay: {{moneyToPay}}$</span></h4>
      <img class="clearCart" src="../assets/bin.png" @click="clearCart"/>
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
    },
    moneyToPay() {
      return this.$store.getters.moneyToPay
    },
    visibleCartElements() {
      return this.$store.getters.visibleCartElements
    },
    clearCart() {
      return this.$store.getters.clearCart
    }
  },
  methods: {
    productQuantityInCart(product) {
      return this.$store.getters.productQuantityInCart(product)
    },
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product)
    },
  }
};
</script>

<style scoped>

#cart-size {
  margin: 0px 8px 8px 8px;
}

.removeButton {
  position: absolute;
  cursor: pointer;
  right: 0;
  display: none;
}

#clearButtonApear:hover img{
  display: grid;
  top: 10px;
}

.bottom {
  display: flex;
  align-items: center;
}

.clearCart {
  height: 24px;
  width: 24px;
  margin-right: 15px;
  margin-bottom: 6px;
  cursor: pointer;
}

.border-dash {
    border-style: dashed;
}

.btn-danger {
  text-align: center;
}

.border-rounded {
    border-radius: 10px;
}

.card {
  position: sticky;
  top: 20px;
}
</style>
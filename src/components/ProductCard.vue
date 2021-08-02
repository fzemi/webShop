<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <div class="center">
        <a @click="decrementQuantity" class="btn btn-danger btn-no-radius btn-add-remove rounded-start">-</a>
        <a @click="makeOrder" class="btn btn-primary btn-no-radius">Quantity: {{quantity}}</a>
        <a @click="incrementQuantity" class="btn btn-success btn-no-radius btn-add-remove rounded-end">+</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed, toRefs } from "vue";
export default {
  name: "ProductCard",
  setup() {
      const state = reactive({
        quantity: 0,
        price: 100,
        totalPrice: computed(() => state.price * state.quantity)
      });
      function makeOrder() {
        state.quantity++;
      }
      function incrementQuantity() {
          state.quantity++;
      }
      function decrementQuantity() {
          if(state.quantity > 0)
            state.quantity--;
      }
      return {makeOrder, incrementQuantity, decrementQuantity, ...toRefs(state)};
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
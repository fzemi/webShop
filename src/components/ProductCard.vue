<template>
  <div class="card" style="width: 18rem">
    <img src="../assets/logo.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a @click="makeOrder" class="btn btn-primary">Cena: {{totalPrice}}</a>
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

      return {makeOrder, ...toRefs(state)};
  }
};
</script>
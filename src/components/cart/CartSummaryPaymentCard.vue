<template>
  <div class="cart-item-card">
    <h2>Cart Total: ${{ cart_total.toFixed(2) }}</h2>
    <button class="view-product-button">Checkout</button>
  </div>
</template>

<script>
export default {
  computed: {
    cart_total() {
      return this.$store.getters.cartTotal;
    },
  },
};
</script>

<style scoped>
.cart-item-card h2 {
  padding: 10px 0;
  text-align: center;
}

.view-product-button {
  display: flex;
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 8px 15px;
  background-color: rgb(80, 160, 188);
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>

<template>
  <div class="cart-item-card">
    <div class="header">
      <img :src="product.image" alt="" />
      <h3>{{ product.name }}</h3>
      <h4>In Cart: {{ product.quantity }}</h4>
      <h4>Total Cost: {{ item_cost.toFixed(2) }}</h4>
    </div>

    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    description() {
      return this.product.description.substring(0, 250);
    },

    item_cost() {
      return this.product.price * this.product.quantity;
    },
  },
};
</script>

<style scoped>
.cart-item-card {
  width: 34%;
  margin: 20px;
  box-shadow: 0 0 5px #aaa;
  border-radius: 5px;
  padding: 66px 10px;
  text-align: center;
}

.cart-item-card .header {
  display: flex;
  justify-content: space-around;
}

.cart-item-card p {
  width: 85%;
  display: flex;
  margin: 0 auto;
}
</style>

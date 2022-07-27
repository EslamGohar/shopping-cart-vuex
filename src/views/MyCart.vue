<template>
  <div class="cart">
    <h1>Your Cart</h1>
    <CartItemCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />

    <CartSummaryPaymentCard />
  </div>
</template>

<script>
import CartItemCard from "@/components/cart/CartItemCard.vue";
import CartSummaryPaymentCard from "@/components/cart/CartSummaryPaymentCard.vue";

export default {
  components: {
    CartItemCard,
    CartSummaryPaymentCard,
  },
  computed: {
    products() {
      return this.$store.getters.cartItems;
    },
  },
};
</script>

<style scoped>
.cart {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media screen and (min-width: 500px) {
  .cart {
    margin: 0 -400px;
    font-size: 15px;
    padding: 0 40px;
  }
}
</style>

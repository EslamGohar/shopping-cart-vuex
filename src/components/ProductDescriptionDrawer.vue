<template>
  <div
    class="drawer-background"
    :class="{ show: active }"
    @click="$emit('close-product-drawer')"
  >
    <div class="drawer" :class="{ show: active }">
      <div class="drawer-close" @click="$emit('close-product-drawer')">X</div>
    </div>

    <div v-if="product" class="product-details">
      <img :src="product.image" alt="" class="text-center" />
      <h3 class="text-center">{{ product.name }}</h3>
      <p class="description">{{ product.description }}</p>
      <h3 class="text-center">${{ product.price.toFixed(2) }}</h3>

      <div class="cart-total" v-if="product.total">
        <h3>In Cart</h3>
        <h4>{{ product_total }}</h4>
      </div>

      <div class="button-container">
        <button class="remove" @click="removeFromCart()">Remove</button>
        <button class="add" @click="addToCart()">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product", "active"],
  methods: {
    addToCart() {
      this.$store.commit("addToCart", this.product);
    },

    removeFromCart() {
      this.$store.commit("removeFromCart", this.product);
    },
  },
  computed: {
    product_total() {
      return this.$store.getters.productQuantity(this.product);
    },
  },
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.drawer-background {
  width: 330px;
  height: 280px;
  position: fixed;
  right: 30px;
  top: 50px;
  background-color: #fff;
  border: 1px solid #aaa;
  border-radius: 5px;
  display: none;
  transition: delay 0.5s;
}

.show {
  display: block;
}

.drawer {
  width: 95vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: -100vw;
  padding: 15px;
  transition: right 0.5s;
  z-index: 101;
}

.drawer-close {
  font-size: 1.5rem;
  padding: 5px;
  border-radius: 5px;
  right: 10px;
  border: 2px solid #aaa;
  color: #f00;
  width: 15px;
  float: left;
  cursor: pointer;
}

.drawer-close:hover {
  background-color: lightgray;
}

.product-details {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.product-details p.description {
  font-size: 10px;
  padding: 20px;
  line-height: 1rem;
}

.product-details .button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-details .button-container button {
  width: 85px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  margin: -8px 15px 0;
  cursor: pointer;
}

@media (min-width: 500px) {
  .drawer {
    width: 450px;
  }
}
</style>

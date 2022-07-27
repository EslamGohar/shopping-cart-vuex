<template>
  <div class="card">
    <img :src="product.image" :alt="product.name" />
    <h3>{{ product.name }}</h3>
    <h5 class="price">${{ product.price.toFixed(2) }}</h5>
    <button class="view-product-button" @click="$emit('view-product', product)">
      View Product
    </button>
  </div>
</template>

<script>
import items from "../data/items.js";
export default {
  props: ["product"],
  data() {
    return {
      items: items,
    };
  },
};
</script>

<style lang="css" scoped>
.card {
  width: 17%;
  height: 260px;
  margin: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 3px grey;
}

.card h5.price {
  color: #aaa;
}

.card button.view-product-button {
  padding: 10px;
  margin: 0 auto;
  display: flex;
  background-color: rgb(80, 160, 188);
  border: none;
  color: #fff;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

img {
  height: 200px;
  width: 200px;
  border-radius: 10px;
}

@media screen and (min-width: 500px) {
  .card {
    width: 265px;
    margin: 20px;
  }
}
</style>

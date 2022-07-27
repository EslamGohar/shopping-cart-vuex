<template>
  <h2>New Arrivals</h2>

  <product-description-drawer
    :product="product"
    :active="active.product_drawer"
    @close-product-drawer="closeProductDrawer()"
  />

  <div class="cards-container">
    <product-summary-card
      v-for="product in items"
      :key="product.id"
      :product="product"
      @view-product="viewProduct($event)"
    />
  </div>

  <div class="mybutton">
    <my-button>shop all</my-button>
  </div>
</template>

<script>
import items from "@/data/items.js";
import ProductSummaryCard from "@/components/ProductSummaryCard.vue";
import ProductDescriptionDrawer from "@/components/ProductDescriptionDrawer.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  components: {
    ProductSummaryCard,
    ProductDescriptionDrawer,
    MyButton,
  },

  data() {
    return {
      items: items,
      product: null,
      active: {
        product_drawer: false,
      },
    };
  },

  methods: {
    viewProduct(product) {
      this.product = product;
      this.active.product_drawer = true;
    },
    closeProductDrawer() {
      this.active.product_drawer = false;
    },
  },
};
</script>

<style lang="css">
h2 {
  padding: 40px 0 10px;
  text-align: center;
}

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.mybutton {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

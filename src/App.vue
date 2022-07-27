<template>
  <div>
    <!-- 
      <router-link :class="{ active: $route.name === 'Home' }" to="/">Home</router-link>
      <router-link :class="{ active: $route.name === 'MyCart' }" to="/cart">Cart</router-link>
    -->
    <navbar-comp />
    <new-arrivals />
    <div class="break"></div>
    <my-footer />
  </div>
  <router-view></router-view>
</template>

<script>
import NavbarComp from "@/components/NavbarComp.vue";
import NewArrivals from "@/components/NewArrivals.vue";
import MyFooter from "@/components/MyFooter.vue";

export default {
  components: {
    NavbarComp,
    NewArrivals,
    MyFooter,
  },

  mounted() {
    this.$store.commit("updateCartFromLocalStorage");
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.text-center {
  text-align: center;
}

.break {
  border-bottom: 2px solid #ccc;
  width: 77%;
  margin: 0 auto;
  padding-top: 40px;
}
</style>

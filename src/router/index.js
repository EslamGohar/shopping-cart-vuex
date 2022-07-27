import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyCart from "../views/MyCart.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/cart", name: "mycart", component: MyCart },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

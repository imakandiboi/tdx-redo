import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "",
    component: () => import(/* webpackChunkName: "index" */ "@/views/index"),
    children: [],
  },
  {
    path: "/product",
    name: "",
    component: () =>
      import(/* webpackChunkName: "product" */ "@/views/product.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;

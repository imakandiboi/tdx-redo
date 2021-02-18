import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/index"),
  },
  {
    path: "/product",
    name: "",
    component: () =>
      import("@/views/product.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import("@/views/profile.vue"),
    children: [

    ]
  },
  {
    path: '/profile/settings',
    name: 'Settings',
    component: () =>
      import("@/views/settings.vue"),
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;

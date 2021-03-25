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
    component: () => import("@/views/product.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/profile.vue"),
    redirect: "/profile/default",
    children: [
      {
        path: "/profile/default",
        name: "ProfileDefault",
        component: () => import("@/components/profile/ProfileComponent.vue"),
      },
      {
        path: "/profile/selling_info",
        name: "SellingInfo",
        component: () => import("@/components/profile/SellingInfoComponent.vue"),
      },
      {
        path: "/profile/settings",
        // name: "Settings",
        component: () => import("@/views/settings.vue"),
        children: [
          {
            path: "/",
            name: "Settings",
            component: () => import("@/components/profile/MobileSettings"),
          },
          {
            path: "contact-details",
            name: "contact-details",
            component: () => import("@/components/profile/settings/ContactDetails"),
          },
          {
            path: "company-details",
            name: "company-details",
            component: () => import("@/components/profile/settings/CompanyDetails"),
          },

          {
            path: "phone",
            name: "phone",
            component: () => import("@/components/profile/settings/phone"),
          },

          {
            path: "chat",
            name: "chat-settings",
            component: () => import("@/components/profile/settings/ChatSettings"),
          },

          {
            path: "feedback",
            name: "feedback-settings",
            component: () => import("@/components/profile/settings/FeedbackSettings"),
          },

          {
            path: "social",
            name: "social-networks",
            component: () => import("@/components/profile/settings/SocialNetworks"),
          },

          {
            path: "notification",
            name: "notification-settings",
            component: () => import("@/components/profile/settings/NotificationSettings"),
          },

          {
            path: "change-password",
            name: "change-password",
            component: () => import("@/components/profile/settings/ChangePassword"),
          },

          {
            path: "manage-account",
            name: "manage-account",
            component: () => import("@/components/profile/settings/ManageAccount"),
          },
        ],
      },
    ],
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("@/views/search.vue"),
  },
  {
    path: "/plan",
    name: "plan",
    component: () => import("@/views/plan.vue"),
  },
  {
    path: "/plan/Premium",
    name: "Premium",
    component: () => import("@/components/plan/Premium.vue"),
  },
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history",
});

export default router;

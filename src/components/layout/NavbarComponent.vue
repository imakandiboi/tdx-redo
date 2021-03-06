<template>
  <div>
    <div>
      <div class="hidden lg:block">
        <DesktopNav @changeActive="showModal" />
      </div>
      <div class="block lg:hidden">
        <MobileNav @changeActive="showModal" v-if="showNav" />
      </div>
    </div>
    <t-modal v-model="showRegisterLogin">
      <div>
        <div class="py-12 rounded-b">
          <keep-alive>
            <LoginModal
              v-if="currentTab === 'LoginModal'"
              @changeForm="showModal"
            />
            <RegisterModal v-else @changeForm="showModal" />
          </keep-alive>
        </div>
      </div>
    </t-modal>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
  components: {
    LoginModal: () => import("@/components/layout/modals/Login"),
    RegisterModal: () => import("@/components/layout/modals/Signup"),
    MobileNav: () => import("@/components/layout/MobileNavComponent"),
    DesktopNav: () => import("@/components/layout/DesktopNavComponent"),
  },
  data() {
    return {
      showNav: true,
      showRegisterLogin: false,
      currentTab: "LoginModal",
      tabs: [
        { name: "Login Modal", component: "LoginModal" },
        { name: "Register Modal", component: "RegisterModal" },
      ],
    };
  },
  methods: {
    showModal(payload) {
      this.showRegisterLogin = true;
      if (payload == "register") {
        return (this.currentTab = "RegisterModal");
      }
      return (this.currentTab = "LoginModal");
    },
  },
  watch: {
    immediate: true,
    $route: function () {
      // Check if given route is true, if it is then hide Nav.
      if (
        this.$route.name === "Settings" ||
        this.$route.name === "ProfileDefault" ||
        this.$route.name === "SellingInfo"
      ) {
        this.showNav = false;
      } else {
        this.showNav = true;
      }
    },
  },
};
</script>


<style scoped>
.shadow {
  box-shadow: 1px 1px 4px rgb(80 114 125 / 40%);
}
@media screen and (max-width: 768px) {
  .h {
    display: none;
  }
}
</style>
<template>
  <div>
    <div>
      <div class="hidden lg:block">
        <DesktopProfile />
      </div>
      <div class="block lg:hidden">
        <MobileProfile />
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MobileProfile: () => import("@/components/profile/MobileProfile"),
    DesktopProfile: () => import("@/components/profile/DesktopProfile"),
  },
};
</script>

<style lang="scss" scoped>
</style>
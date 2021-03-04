<template>
  <div class="container mx-auto lg:py-10 lg:px-20">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-2 hidden lg:block">
        <DesktopSettings />
      </div>
      <div class="col-span-6 mt-20 lg:col-span-4 lg:mt-0">
        <router-view></router-view>

        <!-- <MobileSettings /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    // MobileSettings: () => import("@/components/profile/MobileSettings"),
    DesktopSettings: () => import("@/components/profile/DesktopSettings"),
  },
};
</script>

<style lang="scss" scoped>
</style>
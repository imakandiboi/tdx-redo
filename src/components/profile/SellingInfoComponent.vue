<template>
  <div>
    <div class="block md:hidden">
      <MobileSellingInfo />
    </div>
    <div class="hidden md:block">
      <DesktopSellingInfo />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MobileSellingInfo: () => import("@/components/profile/MobileSellingInfo"),
    DesktopSellingInfo: () => import("@/components/profile/DesktopSellingInfo"),
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <div class="block md:hidden">
      <MobileHowtosell />
    </div>
    <div class="hidden md:block">
      <DesktopHowtosell />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MobileHowtosell: () => import("@/components/profile/MobileHowtosell"),
    DesktopHowtosell: () => import("@/components/profile/DesktopHowtosell"),
  },
};
</script>

<style lang="scss" scoped>
</style>
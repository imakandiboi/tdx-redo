<template>
  <div>
    <div>
      <div class="hidden lg:block">
        <DesktopSettings />
      </div>
      <div class="block lg:hidden">
        <MobileSettings />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MobileSettings: () => import("@/components/profile/MobileSettings"),
    DesktopSettings: () => import("@/components/profile/DesktopSettings"),
  },
};
</script>

<style lang="scss" scoped>
</style>
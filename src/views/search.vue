<template>
  <div>
    <div>
      <div class="hidden lg:block">
        <DesktopSearch />
      </div>
      <div class="block lg:hidden">
        <MobileSearch />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MobileSearch: () => import("@/components/search/MobileSearch"),
    DesktopSearch: () => import("@/components/search/DesktopSearch"),
  },
};
</script>

<style lang="scss" scoped>
</style>
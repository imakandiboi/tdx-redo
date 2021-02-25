<template>
  <div>
    <EmptyData :messageTitle="emptyTitle" :messageBody="emptyMessage" />
  </div>
</template>

<script>
import EmptyData from "@/components/layout/handlers/EmptyTab";
export default {
  components: { EmptyData },
  data() {
    return {
      emptyTitle: "No Adverts Available",
      emptyMessage: "Create new adverts!!!",
    };
  },
};
</script>

<style lang="scss" scoped></style>

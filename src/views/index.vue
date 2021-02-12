<template>
  <div>
    <lander />
    <home-categories />
  </div>
</template>

<script>
import Lander from "@/components/home/Lander.vue";
import HomeCategories from "@/components/home/HomeCategoriesComponent";
export default {
  components: {
    Lander,
    HomeCategories,
  },
};
</script>
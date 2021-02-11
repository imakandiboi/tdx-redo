<template>
  <div>
    <Header />
    <Lander />
  </div>
</template>

<script>
import Lander from "@/components/home/Lander.vue";
import Header from "../components/layout/Header.vue";
export default {
  components: {
    Lander,
    Header,
  },
};
</script>
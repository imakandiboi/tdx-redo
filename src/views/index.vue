<template>
  <div>
    <Lander />
    <b-container>
      <b-row>
        <b-cols sm="4"></b-cols>
        <b-cols sm="8"></b-cols>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Lander from "@/components/home/Lander.vue";
export default {
  components: {
    Lander,
  },
};
</script>
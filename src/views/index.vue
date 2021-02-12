<template>
  <div>
    <Header />
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
import Header from "../components/layout/Header.vue";
export default {
  components: {
    Lander,
    Header,
  },
};
</script>
<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/layout/NavbarComponent";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
</style>

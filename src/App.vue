<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main class="pt-12 bg-gray-100">
      <router-view></router-view>
    </main>
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

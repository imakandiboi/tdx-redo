<template>
  <div id="app">
    <header>
      <Navbar />
    </header>
    <main class="md:pt-12 bg-gray-100">
      <router-view></router-view>
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navbar from "@/components/layout/NavbarComponent";
import Footer from "./components/layout/FooterComponent.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>

<style>
</style>

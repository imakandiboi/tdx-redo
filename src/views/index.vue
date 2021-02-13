<template>
  <div>
    <lander />
    <div class="grid lg:grid-cols-2 w-auto lg:w-11/12 lg:mt-4 lg:mx-auto">
      <!-- Categories area -->
      <div>
        <div class="block lg:hidden">
          <home-categories :categories="GetCategories" />
        </div>
        <div class="hidden lg:block">
          <desktop-categories :categories="GetCategories" />
        </div>
      </div>
      <!-- Categories area end-->

      <!-- Ads listing area -->
      <div class="">
        <AdsListing />
      </div>
      <!-- Ads Listing area end -->
    </div>
  </div>
</template>

<script>
import Lander from "@/components/home/Lander";
import AdsListing from "@/components/home/AdsListing";
import { mapGetters } from "vuex";

export default {
  components: {
    Lander,
    HomeCategories: () => import("@/components/home/HomeCategoriesComponent"),
    DesktopCategories: () =>
      import("@/components/home/DesktopCategoriesComponent"),
    AdsListing,
  },
  computed: {
    ...mapGetters("category", ["GetCategories"]),
  },
};
</script>
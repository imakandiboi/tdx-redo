<template>
  <div>
    <lander />
    <div class="grid lg:grid-cols-3 w-auto lg:w-11/12 lg:mt-4 lg:mx-auto">
      <!-- Categories area -->
      <div class="col-span-1">
        <div class="block lg:hidden">
          <home-categories :categories="GetCategories" />
        </div>
        <div class="hidden lg:block">
          <desktop-categories :categories="GetCategories" />
        </div>
      </div>
      <!-- Categories area end-->

      <!-- Ads listing area -->
      <div class="col-span-2 lg:-ml-32">
        <AdsListing :ads="GetAds" />
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
    ...mapGetters("ads", ["GetAds"]),
  },
};
</script>
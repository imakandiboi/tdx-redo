<template>
  <div class="container mx-auto px-4 md:px-10 xl:px-32 mt-4">
    <div class="grid">
      <ol class="pt-2 pb-3">
        <li class="text-gray-700">
          <a
            href="/"
            class="qa-bread-crumbs-link b-breadcrumb-link router-link-active"
            ><span>All ads</span></a
          >
          <meta />
        </li>
        <li class="text-gray-700">
          <a href="/vehicles" class="qa-bread-crumbs-link b-breadcrumb-link"
            ><span>Vehicles</span></a
          >
          <meta />
        </li>
        <li class="text-gray-700">
          <a href="/cars" class="qa-bread-crumbs-link b-breadcrumb-link"
            ><span>Cars</span></a
          >
          <meta />
        </li>
        <li class="text-gray-700">
          <a href="/cars/toyota" class="qa-bread-crumbs-link b-breadcrumb-link"
            ><span>Toyota</span></a
          >
          <meta />
        </li>
      </ol>
    </div>
    <div class="grid grid-cols-8 gap-3">
      <div class="col-span-8 lg:col-span-5 xl:col-span-6 border-t-4 border-explorerGreen-300 shadow-lg bg-white">
        <Slider />
        <productDetails />
      </div>
      <div class="col-span-8 lg:col-span-3 xl:col-span-2">
        <sellerDetails />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/product/slider";
import sellerDetails from "@/components/product/sellerDetails";
import productDetails from "@/components/product/productDetails";
export default {
  components: {
    Slider,
    sellerDetails,
    productDetails,
  },
};
</script>

<style scoped>
ol li {
  display: inline-block;
}

ol li::before {
  padding: 0 5px;
  color: #ccc;
  content: "/\A0";
}
</style>
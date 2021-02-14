<template>
  <div class="container mx-auto px-4 md:px-10">
    <div class="grid grid-cols-6 gap-3">
      <div class="col-span-6 lg:col-span-4">
        <Slider />
      </div>
      <div class="col-span-6 lg:col-span-2">
        <Details />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/product/slider";
import Details from "@/components/product/sellerDetails";
export default {
  components: {
    Slider,
    Details,
  },
};
</script>
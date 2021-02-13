<template>
  <div class="container mx-auto px-20">
  <div class="grid grid-cols-4 gap-3">
    <div class="col-span-3 md:col-span-3">
      <Slider />
    </div>
    <div class="col-span-3 md:col-span-1">
      dd
    </div>
  </div>
  </div>
</template>

<script>
import Slider from "@/components/slider"
export default {
  components: {
    Slider
  },
};
</script>
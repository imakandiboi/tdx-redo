<template>
  <div class="w-full">
    <p class="ml-4 lg:ml-0 mt-8 lg:mt-2 text-lg text-gray-700 tracking-wide">
      Trending Ads.
    </p>
    <div class="mt-6 grid lg:grid-cols-4 grid-cols-2 w-11/12 ">
      <div
        class="bg-white shadow-md rounded-md relative my-6 w-auto mx-2"
        v-for="(ad, index) in ads"
        :key="index"
      >
        <div class="relative w-full">
          <img
            :src="`/images/${ad.previewImage}`"
            alt=""
            class="w-inherit h-inherit"
          />
          <span
            class="bg-black opacity-60 rounded-full px-3 py-1 text-white absolute bottom-0 left-0"
            >8</span
          >
        </div>
        <div
          class="bg-white shadow-md rounded-full px-1 py-1 h-8 w-8 absolute inset-y-0 right-0 cursor-pointer hover:shadow-lg"
        >
          <svg
            class="h-6 w-6 mx-auto stroke-current text-explorerGreen-200"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <div class="px-4 py-3">
          <p class="text-lg text-gray-700 tracking-wide">{{ ad.name }}</p>
          <p class="text-lg text-explorerGreen-200">&#8358; {{ ad.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { ads: Array },
};
</script>

<style lang="scss" scoped>
</style>
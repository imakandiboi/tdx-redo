<template>
  <div>
    <div
      class="w-full relative flex justify-start fixed top-0"
      @mouseleave="showSubPanel = false"
    >
      <div class="shadow-md w-1/2">
        <ul class="w-full">
          <router-link
            :to="{ name: 'Home' }"
            v-for="(category, index) in categories"
            :key="index"
          >
            <li
              class="py-4 cursor-pointer flex items-center px-2 justify-between hover:bg-green-50 transition ease-in-out duration-500"
              @mouseover="showSubMenu(category)"
            >
              <div class="flex items-center space-x-4">
                <img :src="`/icons/${category.image}`" alt="" class="w-8 h-8" />
                <div>
                  <p class="text-sm text-gray-600">{{ category.name }}</p>
                  <p class="text-xs text-gray-500">{{ category.ads }} ads</p>
                </div>
              </div>

              <svg
                class="h-6 w-6 stroke-current text-explorerGreen-200 float-right"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          </router-link>
        </ul>
      </div>
      <div
        class="border-l border-explorerGreen-200 shadow-md w-1/2 z-10 bg-white"
        v-show="showSubPanel"
      >
        <div
          v-for="(subCategory, index) in selectedCategory.subs"
          :key="index"
          class="w-full hover:bg-gray-100 transition duration-500 ease-in-out py-2 px-4"
        >
          <router-link :to="{ name: 'Home' }">
            <p
              class="text-gray-500 tracking-tight font-md text-left font-light"
            >
              {{ subCategory.name }}
            </p>
            <p class="text-gray-600 font-light tracking-wide font-xs text-left">
              {{ subCategory.ads }} ads
            </p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { categories: { type: Array, required: true } },
  data: () => {
    return {
      showSubPanel: false,
      selectedCategory: {},
    };
  },
  methods: {
    showSubMenu(menu) {
      this.showSubPanel = true;
      this.selectedCategory = menu;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div>
    <div
      class="flex fixed w-full z-50 top-0 items-center justify-between bg-explorerGreen-300 px-4 py-3 shadow-md"
    >
      <div class="w-10/12 flex items-center justify-between mx-auto">
        <div class="flex">
          <router-link :to="{ name: 'Home' }" class="flex">
            <img
              src="@/assets/images/TRADEXPLORA_V4.1_mini.png"
              alt=""
              class="h-auto w-24"
            />
          </router-link>
        </div>
        <div>
          <p
            class="text-green-300 opacity-50 uppercase tracking-wider text-lg text-center"
          >
            SELL FASTER, BUY SMATTER
          </p>
        </div>
        <div class="flex space-x-2 items-center">
          <span
            class="text-green-100 tracking-tight cursor-pointer"
            @click="changeState('login')"
            >Sign In |</span
          >
          <span
            class="text-green-100 tracking-tight cursor-pointer"
            @click="changeState('register')"
            >Registration</span
          >
          <button
            class="text-white rounded bg-yellow-500 ml-4 text-center uppercase tracking-wide px-8 py-2"
          >
            Sell
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeState(tabSelected) {
      this.$emit("changeActive", tabSelected);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
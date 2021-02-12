<template>
  <div>
    <div class="w-11/12 lg:w-10/12 mx-auto">
      <form action="">
        <p class="text-xs text-gray-700 my-2">Sign in via email or phone</p>
        <div class="">
          <input
            type="text"
            placeholder="Email or Phone Number"
            class="block rounded text-sm text-gray-600 placeholder-gray-400 border-2 border-gray-400 focus:outline-none focus:border-explorerGreen-200 w-full px-3 py-3 transition ease-in-out duration-500"
          />
        </div>
        <div class="mt-4">
          <input
            type="text"
            placeholder="Enter Password"
            class="block rounded text-sm text-gray-600 placeholder-gray-400 border-2 border-gray-400 focus:outline-none focus:border-explorerGreen-200 w-full px-3 py-3 transition ease-in-out duration-500"
          />
        </div>
        <div class="w-full flex items-center justify-end mt-2">
          <router-link
            :to="{ name: 'home' }"
            class="text-explorerGreen-400 font-semibold tracking-tight text-xs hover:outline-none hover:text-explorerGreen-200 hover:no-underline"
            >Forgot Your Password</router-link
          >
        </div>
        <div class="mt-3">
          <button
            class="w-full px-4 py-3 tracking-wide text-white bg-explorerGreen-200 rounded hover:"
          >
            Sign In
          </button>
        </div>
        <div class="mt-4 text-center">
          <p class="text-gray-700 text-sm">
            Dont have an account?
            <span
              @click="changeState"
              class="cursor-pointer text-explorerGreen-400 font-semibold tracking-tight text-sm hover:outline-none hover:text-explorerGreen-200 hover:no-underline"
              >Registration</span
            >
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeState() {
      this.$emit("changeForm", "register");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
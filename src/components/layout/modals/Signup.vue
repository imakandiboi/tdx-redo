<template>
  <div>
    <div class="w-10/12 mx-auto">
      <form action="">
        <p class="text-sm my-2 text-gray-700">Register via email and phone</p>
        <div>
          <input
            type="text"
            placeholder="Enter Email"
            class="block rounded text-sm text-gray-600 placeholder-gray-400 border border-gray-400 focus:outline-none focus:border-explorerGreen-200 w-full px-3 py-3 transition ease-in-out duration-500 focus:ring-transparent ring-0"
          />
        </div>
        <div class="mt-6">
          <input
            type="text"
            placeholder="Enter Password"
            class="block rounded text-sm text-gray-600 placeholder-gray-400 border border-gray-400 focus:outline-none focus:border-explorerGreen-200 w-full px-3 py-3 transition ease-in-out duration-500 focus:ring-transparent ring-0"
          />
        </div>
        <div class="mt-6">
          <input
            type="text"
            placeholder="Enter First name"
            class="block rounded text-sm text-gray-600 placeholder-gray-400 border border-gray-400 focus:outline-none focus:border-explorerGreen-200 w-full px-3 py-3 transition ease-in-out duration-500 focus:ring-transparent ring-0"
          />
        </div>
        <div class="mt-6">
          <input
            type="text"
            placeholder="Enter Last name"
            class="block rounded text-sm text-gray-600 placeholder-gray-400 border border-gray-400 focus:outline-none focus:border-explorerGreen-200 w-full px-3 py-3 transition ease-in-out duration-500 focus:ring-transparent ring-0"
          />
        </div>
        <div class="mt-6">
          <input
            type="text"
            placeholder="Enter Phone Number (digits only)"
            class="block rounded text-sm text-gray-600 placeholder-gray-400 border border-gray-400 focus:outline-none focus:border-explorerGreen-200 w-full px-3 py-3 transition ease-in-out duration-500 focus:ring-transparent ring-0"
          />
        </div>
        <div class="my-3">
          <label class="inline-flex items-center mt-3">
            <input
              type="checkbox"
              class="form-checkbox h-5 w-5 text-explorerGreen-200 rounded focus:ring-explorerGreen-200"
            /><span class="ml-2 text-explorerGreen-200 text-sm tracking-wide"
              >I agree with rules</span
            >
          </label>
        </div>
        <div class="my-3">
          <button
            class="w-full px-4 py-3 tracking-wide text-white bg-explorerGreen-200 rounded hover:"
          >
            Sign In
          </button>
        </div>
        <div class="mt-4 text-center">
          <p class="text-gray-700 text-xs font-light">
            Already have an account?
            <span
              @click="changeState"
              class="cursor-pointer text-explorerGreen-400 font-semibold tracking-tight text-xs hover:outline-none hover:text-explorerGreen-200 hover:no-underline"
              >Sign In</span
            >
          </p>
        </div>
        <div class="flex items-center justify-center mt-5 space-x-2">
          <div class="pt-0.5 w-full bg-gray-200"></div>
          <p class="text-sm text-gray-700 tracking-tight">Or</p>
          <div class="pt-0.5 w-full bg-gray-200"></div>
        </div>
        <div
          class="mt-5 block md:flex md:items-center justify-center md:space-x-8 md:space-y-0 space-y-8"
        >
          <button
            class="w-full shadow-md bg-white text-gray-800 font-bold px-4 py-3 rounded-md tracking-wide hover:bg-gray-50 transition ease-in-out duration-500 flex items-center"
          >
            <div
              class="flex items-center justify-between w-6/12 md:w-10/12 mx-auto"
            >
              <svg
                class="h-6 w-6 md:mx-auto"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="enable-background: new 0 0 512 512"
                xml:space="preserve"
              >
                <path
                  style="fill: #fbbb00"
                  d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
                />
                <path
                  style="fill: #518ef8"
                  d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
                />
                <path
                  style="fill: #28b446"
                  d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
                />
                <path
                  style="fill: #f14336"
                  d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
                />
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
                <g></g>
              </svg>
              <span>via Google</span>
            </div>
          </button>
          <button
            class="w-full shadow-md bg-blue-900 text-white font-bold px-4 py-3 rounded-md tracking-wide hover:opacity-90 transition ease-in-out duration-500 flex items-center"
          >
            <div
              class="flex items-center justify-between w-8/12 md:w-full mx-auto"
            >
              <svg
                id="Bold"
                class="h-6 w-6 fill-current text-white mx-auto"
                enable-background="new 0 0 24 24"
                height="512"
                viewBox="0 0 24 24"
                width="512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m15.997 3.985h2.191v-3.816c-.378-.052-1.678-.169-3.192-.169-3.159 0-5.323 1.987-5.323 5.639v3.361h-3.486v4.266h3.486v10.734h4.274v-10.733h3.345l.531-4.266h-3.877v-2.939c.001-1.233.333-2.077 2.051-2.077z"
                />
              </svg>
              <span>via Facebook</span>
            </div>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeState() {
      this.$emit("changeForm", "login");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
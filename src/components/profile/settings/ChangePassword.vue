<template>
  <div class="bg-white">
    <div
      class="px-4 py-5 flex items-center justify-between overflow-auto border-b-gray-500 border-b-2"
    >
      <p
        class="hidden lg:block text-gray-700 text-xl font-bold tracking-wide hidden-sm"
      >
        <svg
          stroke-width="0"
          class="mr-2 inline-block"
          style="
            width: 40px;
            height: 40px;
            max-width: 40px;
            max-height: 40px;
            stroke: inherit;
          "
        >
          <use xlink:href="#person">
            <svg id="person" viewBox="0 0 40 40">
              <path
                d="M24.924 21.033s-.385-.046-.77.092c-.803.417-1.878 1.342-4.334 1.342-1.83 0-3.338-.863-4.044-1.342a1.656 1.656 0 0 0-.962-.092c-3.197.555-5.024 2.792-5.537 3.84-.136.278-.418.926-.193 1.25 3.659 5.275 8.377 5.83 11.073 5.877 7.126-.185 10.496-5.646 10.737-5.97.192-.259.08-.57 0-.694-2.408-4.21-5.97-4.303-5.97-4.303z"
              ></path>
              <circle cx="20" cy="14" r="6"></circle>
            </svg>
          </use>
        </svg>
        Change password
      </p>
      <p
        class="block lg:hidden text-explorerGreen-300 text-xl font-bold tracking-wide hidden-sm"
      >
        <svg
          stroke-width="0"
          @click="$router.go(-1)"
          class="mr-2 inline-block"
          style="
            width: 24px;
            height: 24px;
            max-width: 24px;
            max-height: 24px;
            fill: rgb(61, 184, 58);
            stroke: inherit;
          "
        >
          <use xlink:href="#arrow-left">
            <svg id="arrow-left" viewBox="0 0 583.7 1024">
              <path
                fill="inherit"
                d="M7.3,494.4L494.4,7.3c9.7-9.7,25.4-9.7,35.1,0l46.8,46.8c4.7,4.7,7.3,11,7.3,17.6s-2.6,12.9-7.3,17.6L153.7,512l422.7,422.7
	c4.7,4.7,7.3,11,7.3,17.6s-2.6,12.9-7.3,17.6l-46.8,46.8c-4.8,4.8-11.2,7.3-17.6,7.3c-6.4,0-12.7-2.4-17.6-7.3L7.3,529.6
	C-2.4,519.9-2.4,504.1,7.3,494.4L7.3,494.4z"
              ></path>
            </svg>
          </use>
        </svg>
        Change password
      </p>
    </div>
    <div class="flex flex-col items-center justify-center shadow-md px-5 py-10">
      <div class="mx-auto w-full lg:w-3/5 relative my-3">
        <label
          for="password"
          class="absolute text-xs -top-3 p-1 left-3 rounded-sm bg-white text-explorerGreen-300"
          >New password *</label
        >
        <input
          class="w-full rounded-md h-14 border-gray-300 focus:ring-0 focus:outline-none focus:border-explorerGreen-300"
          type="password"
          name="password"
          id="password"
        />
      </div>

      <div class="mx-auto w-full lg:w-3/5 relative my-3">
        <label
          for="confirm-password"
          class="absolute text-xs -top-3 p-1 left-3 rounded-sm bg-white text-explorerGreen-300"
          >Re-type new password *</label
        >
        <input
          class="w-full rounded-md h-14 border-gray-300 focus:ring-0 focus:outline-none focus:border-explorerGreen-300"
          type="password"
          name="confirm-password"
          id="confirm-password"
        />
      </div>

      <div class="mx-auto w-full lg:w-3/5 relative my-3">
        <button
          class="w-full text-white font-bold rounded-md bg-explorerGreen-300 hover:bg-explorerGreen-400 transition-all duration-300 py-3"
        >
          CHANGE
        </button>
      </div>
    </div>
  </div>
</template>
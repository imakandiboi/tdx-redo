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
        Manage my account
      </p>
      <p
        class="block lg:hidden text-explorerGreen-300 text-xl font-bold tracking-wide hidden-sm"
      >
        <router-link :to="{ name: 'Settings' }">
          <svg
            stroke-width="0"
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
        </router-link>
        Manage my account
      </p>
    </div>
    <div class="flex flex-col shadow-md px-7 py-10">
      <div class="w-full relative my-3">
        <p class="text-lg text-gray-600 leading-10 text-justify">
          Account deactivation means to delete your account:
        </p>

        <p class="text-lg text-gray-600 text-justify">
          You will not be able to log in to your profile anymore and all your
          account history will be deleted without the possibility to restore
        </p>
      </div>

      <div class="w-full relative my-3 flex justify-center">
        <div
          style="cursor: pointer"
          class="w-full lg:w-2/4 market py-6 flex items-center justify-center rounded-md h-10 bg-red-500 hover:bg-red-700"
        >
          <button
            style="outline: none"
            type="button"
            class="text-md px-3 text-white font-semibold"
          >
            <span> CONTINUE TO DELETE MY ACCOUNT</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.switch__label {
  position: relative;
  cursor: pointer;
}
.switch__input {
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: -1;
  transform: translate(-50%, -50%);
}
.switch {
  --width: 6rem;
  --height: 3rem;
  --background: hsl(0, 0%, 30%);
  --checked-background: var(--primary-dark);
  --thumb-size: 1.6rem;
  --thumb-ripple-color: var(--ripple);
  --thumb-background: hsl(0, 0%, 65%);
  --checked-thumb-background: var(--primary-light);
  --thumb-space-between-edges: 0.6rem;
  --thumb-out: var(--thumb-space-between-edges);
}

.switch--2 {
  --width: 4rem;
  --height: 1.2rem;
  --thumb-size: 2rem;
  --thumb-space-between-edges: 0rem;
  --thumb-out: -0.3rem;
}

.switch__design {
  display: inline-block;
  width: var(--width);
  height: var(--height);
  border: var(--border);
  border-radius: 100rem;
  background: var(--background);
  position: relative;
  transition: 0.2s, box-shadow 0s;
}
.switch__design::before {
  content: "";
  position: absolute;
  left: var(--thumb-out);
  top: 50%;
  transform: translateY(-50%);
  width: var(--thumb-size);
  height: var(--thumb-size);
  border-radius: 100rem;
  background: var(--thumb-background);
  transition: inherit;
}

.switch__input:checked + .switch__design {
  border-color: transparent;
  background: #3fb93a;
}

.switch__input:checked + .switch__design::before {
  left: calc(100% - (var(--thumb-size) + var(--thumb-out)));
  background: green;
}
</style>


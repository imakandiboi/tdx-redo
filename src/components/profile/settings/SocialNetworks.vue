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
        Social networks
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
        Social networks
      </p>
    </div>
    <div class="flex flex-col shadow-md px-10 py-10">
      <div class="mx-auto w-full mx-5 relative my-3 flex justify-between">
        <p class="text-md text-gray-700 text-justify">
          <svg
            stroke-width="0"
            class="mr-1 inline-block"
            style="
              width: 32px;
              height: 32px;
              max-width: 32px;
              max-height: 32px;
              fill: rgb(59, 89, 152);
              stroke: inherit;
            "
          >
            <use xlink:href="#facebook">
              <svg id="facebook" viewBox="0 0 96.124 96.123">
                <path
                  fill="inherit"
                  d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
        c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
        c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
        c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                ></path>
              </svg>
            </use>
          </svg>
          Facebook
        </p>
        <button
          class="py-1 h-8 px-4 bg-explorerGreen-300 text-white text-sm rounded-full"
        >
          Connect
        </button>
      </div>

      <div class="mx-auto w-full mx-5 relative my-3 flex justify-between">
        <p class="text-md text-gray-700 text-justify">
          <svg
            stroke-width="0"
            class="mr-1 inline-block"
            style="
              width: 32px;
              height: 32px;
              max-width: 32px;
              max-height: 32px;
              fill: rgb(244, 180, 0);
              stroke: inherit;
            "
          >
            <use xlink:href="#google-colored">
              <svg id="google-colored" viewBox="0 0 19 18">
                <g clip-path="url(#clip0)">
                  <path
                    d="M18.3333 7.36389H9.68359V10.8454H14.626C14.5269 11.3692 14.3324 11.8556 14.0559 12.2904H18.0279C18.3364 11.3459 18.4999 10.311 18.4999 9.20474C18.4999 8.56618 18.4416 7.9529 18.3333 7.36389Z"
                    fill="#3E82F1"
                  ></path>
                  <path
                    d="M14.056 12.2899C13.7387 12.7889 13.3131 13.2202 12.7936 13.5614C11.9712 14.1014 10.9193 14.4204 9.68371 14.4204C9.67133 14.4204 9.65946 14.4199 9.64708 14.4199C7.91466 14.4083 6.37829 13.566 5.39497 12.2904C5.05138 11.8449 4.77537 11.3464 4.5819 10.8115C4.56952 10.7776 4.55662 10.7443 4.54527 10.7099L2.46617 12.2899L1.47717 13.0417C2.19325 14.4356 3.26789 15.6217 4.5819 16.4842C6.0316 17.4353 7.77279 17.9924 9.64708 17.9995C9.65946 17.9995 9.67133 18 9.68371 18C12.1632 18 14.2423 17.1941 15.7616 15.8194C16.7976 14.8846 17.5719 13.6863 18.028 12.2899H14.056Z"
                    fill="#32A753"
                  ></path>
                  <path
                    d="M4.54523 7.29015L2.46612 5.71019L1.47661 4.95837C1.35176 5.20257 1.23775 5.45385 1.13508 5.71019C0.726999 6.72945 0.5 7.83973 0.5 9.00006C0.5 10.1604 0.726999 11.2707 1.13508 12.2899C1.23775 12.5463 1.35176 12.7975 1.47661 13.0417L2.46561 12.2899L4.54471 10.71C4.36105 10.17 4.25684 9.59311 4.25684 9.00006C4.25684 8.407 4.36157 7.83012 4.54523 7.29015Z"
                    fill="#F9BB00"
                  ></path>
                  <path
                    d="M9.68368 0C9.67129 0 9.65943 0.00050559 9.64705 0.00050559C6.07284 0.0141565 2.98256 2.02691 1.47662 4.95832L2.46562 5.71013L4.54472 7.2901C4.55607 7.25622 4.56897 7.22235 4.58135 7.18847C4.77482 6.65406 5.05083 6.15555 5.39442 5.71013C6.37826 4.43453 7.91411 3.59221 9.64653 3.58059C9.65891 3.58059 9.67078 3.58008 9.68316 3.58008C11.0317 3.58008 12.2421 4.0341 13.1939 4.92596L15.808 2.36414L15.8281 2.34442C14.2381 0.89186 12.159 0 9.68368 0Z"
                    fill="#E74133"
                  ></path>
                </g>
              </svg>
            </use>
          </svg>
          Google
        </p>
        <button
          class="py-1 h-8 px-4 bg-explorerGreen-300 text-white text-sm rounded-full"
        >
          Connect
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>


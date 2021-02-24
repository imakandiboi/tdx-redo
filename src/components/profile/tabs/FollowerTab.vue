<template>
  <div class="px-8">
    <div class="w-full rounded-sm border border-gray-300 grid grid-cols-12">
      <div class="col-span-1 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          stroke-width="0"
          class="search"
          style="
            width: 20px;
            height: 20px;
            max-width: 20px;
            max-height: 20px;
            fill: rgb(153, 178, 191);
            stroke: inherit;
          "
        >
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search">
            <svg id="search" viewBox="0 0 20 20">
              <g clip-path="url(#clip0)">
                <path
                  d="M19.1572 18.4394L14.5897 14.0849C15.9655 12.5884 16.807 10.5923 16.807 8.40319C16.807 3.7696 13.0374 0 8.40384 0C3.7696 0 0 3.7696 0 8.40319C0 13.0368 3.7696 16.8064 8.40384 16.8064C10.1953 16.8064 11.8579 16.2426 13.2228 15.283L17.9077 19.7505C18.0822 19.9179 18.3067 20.0006 18.5312 20.0006C18.7704 20.0006 19.009 19.9064 19.1867 19.7197C19.5318 19.3573 19.5183 18.7845 19.1572 18.4394ZM1.62984 8.40319C1.62984 4.66759 4.66887 1.62984 8.40448 1.62984C12.1388 1.62984 15.1778 4.66823 15.1778 8.40319C15.1778 12.1388 12.1388 15.1765 8.40448 15.1765C4.66887 15.1765 1.62984 12.1382 1.62984 8.40319Z"
                  fill="inherit"
                ></path>
              </g>
            </svg>
          </use>
        </svg>
      </div>
      <div class="col-span-11 flex items-center justify-center">
        <input
          id="search"
          v-model="search"
          type="text"
          class="text-gray-300 w-full outline-none focus:outline-none focus:border-0 border-0"
          placeholder="Type your search here"
        />
      </div>
    </div>
    <div class="mt-3">
      <div class="cursor flex items-center">
        <div
          class="mr-2 flex items-center justify-center rounded-full h-14 w-14 p-3 bg-yellow-500"
        >
          <svg
            stroke-width="0"
            class="send-invite w-half h-half"
            style="fill: rgb(255, 255, 255); stroke: inherit"
          >
            <use xlink:href="#send-invite">
              <svg id="send-invite" viewBox="0 0 26 22">
                <path
                  d="M25.75 1.16761C25.747 1.05579 25.7183 0.95928 25.6695 0.861086C25.6548 0.829702 25.6666 0.791097 25.6452 0.761348C25.6348 0.749267 25.6208 0.750902 25.6105 0.741228C25.5987 0.72515 25.5987 0.70503 25.5891 0.692131C25.4939 0.58994 25.3773 0.52799 25.2533 0.503873C25.24 0.502238 25.2333 0.509505 25.2215 0.507098C25.1093 0.491838 24.992 0.499059 24.8872 0.549746L0.626009 12.1492C0.379513 12.2675 0.228223 12.5458 0.252556 12.8395C0.273972 13.1331 0.467303 13.3785 0.732299 13.4485L6.22043 14.8982L8.88848 21.1034C8.90694 21.1436 8.9416 21.1637 8.96669 21.1983C8.97852 21.22 8.9711 21.2474 8.9881 21.2667C9.01244 21.3005 9.05156 21.3166 9.08331 21.3423C9.10764 21.3648 9.12906 21.3874 9.16152 21.4043C9.25673 21.4614 9.35489 21.5 9.46118 21.5C9.48551 21.5 9.50693 21.4984 9.53205 21.4952C9.6516 21.4807 9.75272 21.4187 9.84201 21.3431C9.85234 21.3335 9.8693 21.3383 9.88113 21.3278L14.0858 17.2843L18.2462 18.7719C18.5561 18.8773 18.8949 18.7164 19.0248 18.3906L25.7234 1.45238C25.7367 1.41137 25.7264 1.36632 25.7337 1.32285C25.7471 1.26817 25.75 1.22393 25.75 1.16761ZM10.1491 14.7848C10.1373 14.7936 10.1417 14.8105 10.1306 14.8201C10.0473 14.9135 9.97638 15.0213 9.95055 15.1532L9.24277 18.6794L7.47292 14.5571L18.3953 6.79672L10.1491 14.7848ZM18.3695 5.16926L6.54964 13.566L2.84756 12.5893L18.3695 5.16926ZM10.4908 18.9055L11.034 16.1927L12.6932 16.7857L10.4908 18.9055ZM18.0942 17.2675L11.809 15.0189L23.4384 3.75249L18.0942 17.2675Z"
                  fill="inherit"
                ></path>
              </svg>
            </use>
          </svg>
        </div>
        <div class="inline-block text-yellow-500">
          Invite your friends to tdx
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },

  methods: {
    check() {
      return;
    },
  },
};
</script>


<style scoped>
input[type="text"]:focus {
  border: none !important;
  --tw-ring-color: none;
}
</style>
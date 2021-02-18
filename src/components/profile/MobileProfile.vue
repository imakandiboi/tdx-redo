<template>
  <div>
    <div
      class="bg-gradient-to-r py-3 from-explorerGreen-200 to-explorerGreen-500"
    >
      <img
        src="/icons/programmer.svg"
        alt=""
        class="rounded-full w-20 mx-auto h-20"
      />
      <p class="text-center py-4 text-lg font-bold tracking-wide text-white">
        Owolabi Joshua (Dropcode)
      </p>
    </div>
    <div>
      <ul>
        <li class="w-full border-b border-gray-200 bg-white py-6">
          <router-link
            :to="{ name: 'Profile' }"
            class="w-full h-full flex items-center justify-start px-4 space-x-4"
          >
            <svg
              class="h-6 w-6 stoke-current text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
            <span class="text-xl tracking-tight text-gray-700">My Adverts</span>
          </router-link>
        </li>
        <li class="w-full border-b border-gray-200 bg-white py-6">
          <router-link
            :to="{ name: 'Profile' }"
            class="w-full h-full flex items-center justify-start px-4 space-x-4"
          >
            <p class="text-2xl">🤑</p>
            <span class="text-xl tracking-tight text-gray-700"
              >Make money with tradexplorer</span
            >
          </router-link>
        </li>
        <li class="w-full border-b border-gray-200 bg-white py-6">
          <router-link
            :to="{ name: 'Profile' }"
            class="w-full h-full flex items-center justify-start px-4 space-x-4"
          >
            <svg
              class="h-8 w-8 fill-current text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl tracking-tight text-gray-700">Feedback</span>
          </router-link>
        </li>
        <li class="w-full border-b border-gray-200 bg-white py-6">
          <router-link
            :to="{ name: 'Profile' }"
            class="w-full h-full flex items-center justify-start px-4 space-x-4"
          >
            <svg
              class="h-8 w-8 fill-current text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              />
            </svg>
            <span class="text-xl tracking-tight text-gray-700">Followers</span>
          </router-link>
        </li>
        <li class="w-full border-b border-gray-200 bg-white py-6">
          <router-link
            :to="{ name: 'Profile' }"
            class="w-full h-full flex items-center justify-start px-4 space-x-4"
          >
            <svg
              class="h-8 w-8 fill-current text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl tracking-tight text-gray-700"
              >Notifications</span
            >
          </router-link>
        </li>
        <li class="w-full border-b border-gray-200 bg-white py-6">
          <router-link
            :to="{ name: 'Settings' }"
            class="w-full h-full flex items-center justify-start px-4 space-x-4"
          >
            <svg
              class="h-8 w-8 fill-current text-gray-800"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="text-xl tracking-tight text-gray-700">Settings</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="block lg:hidden">
    <div class="pt-0">
      <div
        class="flex items-center shadow-md justify-start space-x-4 px-2 py-3 bg-white"
      >
        <router-link :to="{ name: 'Profile' }">
          <button class="focus:outline-none">
            <svg
              class="h-8 w-8 stroke-current text-explorerGreen-200"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </router-link>
        <p class="text-explorerGreen-200 text-sm tracking-wide">Settings</p>
      </div>
      <div class="mt-6 shadow-sm w-11/12 mx-auto bg-white">
        <ul>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'contact-details' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Contact details</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'company-details' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Company details</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'phone' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Mobile phone settings</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'chat-settings' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Chat settings</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'feedback-settings' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Feedback settings</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mt-6 shadow-sm w-11/12 mx-auto bg-white">
        <ul>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'social-networks' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Social networks</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'notification-settings' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Notification settings</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'change-password' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Change password</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'manage-account' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Manage my account</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="mt-6 shadow-sm w-11/12 mx-auto bg-white">
        <ul>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'Home' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >About Tradexplorer</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'Home' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm"
                >Frequently asked questions</span
              >
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
          <li class="w-full border-b border-gray-200">
            <router-link
              :to="{ name: 'Home' }"
              class="w-full flex items-center justify-between px-3 py-3"
            >
              <span class="text-gray-600 tracking-tight text-sm">Sign out</span>
              <svg
                class="h-8 w-8 stoke-current text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.3"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>
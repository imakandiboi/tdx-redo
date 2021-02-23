<template>
  <div>
    <div class="">
      <div class="px-4 py-6 flex items-center justify-between">
        <p class="text-gray-700 text-xl font-bold tracking-wide hidden-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            stroke-width="0"
            class="mr-2 inline"
            style="
              width: 24px;
              height: 24px;
              max-width: 24px;
              max-height: 24px;
              fill: rgb(61, 184, 58);
              stroke: inherit;
            "
          >
            <use
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xlink:href="#menu-followers"
            >
              <svg id="menu-followers" viewBox="0 0 24 22">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.36586 0H20.6373C22.4933 0 24 1.57386 24 3.51608V14.2185C24 16.1607 22.4933 17.7346 20.6342 17.7346H16.3355C15.7424 17.7346 15.1912 18.0527 14.877 18.5752L13.255 21.2742C12.6748 22.2419 11.3253 22.2419 10.7418 21.2742L9.11984 18.5752C8.80248 18.0527 8.25428 17.7346 7.66129 17.7346H3.36586C1.50661 17.7346 0 16.1607 0 14.2185V3.51608C0 1.57386 1.50661 0 3.36586 0ZM14.5866 6.92436C14.5866 8.3185 13.6477 9.44863 12.0048 9.44863C10.3618 9.44863 9.39843 8.3185 9.39843 6.92436C9.39843 5.53014 10.3618 4.40001 12.0048 4.40001C13.6477 4.40001 14.5866 5.53014 14.5866 6.92436ZM7.11108 13.64H16.8889L16.8848 13.2V12.5496C16.8848 11.1784 15.5755 10.064 13.9556 10.064H10.0403C8.42451 10.064 7.11108 11.175 7.11108 12.5496V13.64Z"
                  fill="inherit"
                ></path>
              </svg>
            </use>
          </svg>
          {{ option }}
        </p>
        <div class="flex items-center space-x-4">
          <button
            class="flex items-center px-4 py-2 text-xs rounded-lg focus:outline-none text-white"
            :class="
              currentTab === 'FollowerTab'
                ? 'bg-explorerGreen-300 focus:text-white font-semibold'
                : 'text-explorerGreen-300 '
            "
            @click="switchTab('FollowerTab')"
          >
            My Followers
          </button>
          <button
            class="px-4 py-2 flex items-center focus:outline-none text-explorerGreen-400 text-xs rounded-lg"
            :class="
              currentTab === 'FollowingTab'
                ? 'bg-explorerGreen-300 focus:text-white font-semibold'
                : 'text-explorerGreen-300 '
            "
            @click="switchTab('FollowingTab')"
          >
            My Following
          </button>
        </div>
      </div>
      <div class="px-4 py-6 shadow bg-white border-t border-gray-200 w-full">
        <keep-alive>
          <FollowerTab :is="currentTab" />
          <FollowingTab :is="currentTab" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FollowersTabComponent",

  components: {
    FollowerTab: () => import("@/components/profile/tabs/FollowerTab"),
    FollowingTab: () => import("@/components/profile/tabs/FollowingTab"),
  },

  data() {
    return {
      currentTab: "FollowerTab",
      option: "My Followers",
    };
  },

  methods: {
    switchTab(tab) {
      this.currentTab = tab;
      this.option = tab == "FollowerTab" ? "My Followers" : "My Following";
    },
  },
};
</script>

<style lang="css" scoped>
</style>
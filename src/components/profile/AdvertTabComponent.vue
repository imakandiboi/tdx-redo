<template>
  <div>
    <div class="">
      <div class="px-4 py-6 flex items-center justify-between overflow-auto">
        <p class="text-gray-700 text-sm font-bold tracking-wide hidden-sm">
          My Adverts
        </p>
        <div class="flex items-center space-x-2">
          <button
            class="flex items-center px-3 py-2 text-xs rounded-lg focus:outline-none text-white"
            :class="
              currentTab === 'ActiveAdvertTab'
                ? 'bg-explorerGreen-300 focus:text-white font-semibold'
                : 'text-explorerGreen-300 '
            "
            @click="switchTab('ActiveAdvertTab')"
          >
            <svg
              class="h-4 w-4 text-white -ml-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Active <span class="text-xs">(0)</span>
          </button>
          <button
            class="px-3 py-2 flex items-center focus:outline-none text-yellow-400 text-xs rounded-lg"
            :class="
              currentTab === 'ReviewAdvertTab'
                ? 'bg-yellow-100 focus:text-yellow-600'
                : ''
            "
            @click="switchTab('ReviewAdvertTab')"
          >
            Reviewing <span>(0)</span>
          </button>
          <button
            class="px-3 py-2 text-xs flex items-center rounded-lg text-red-400"
            :class="
              currentTab === 'DeclinedAdvertTab'
                ? 'bg-red-600 opacity-50 focus:outline-none focus:text-white'
                : ''
            "
            @click="switchTab('DeclinedAdvertTab')"
          >
            Declined <span>(0)</span>
          </button>
          <button
            class="px-3 py-2 text-xs flex items-center rounded-lg text-gray-800"
            :class="
              currentTab === 'DraftAdvertTab'
                ? 'bg-gray-600 opacity-50 focus:outline-none focus:text-white'
                : ''
            "
            @click="switchTab('DraftAdvertTab')"
          >
            Draft <span>(0)</span>
          </button>
          <button
            class="px-3 py-2 text-xs flex items-center rounded-lg text-gray-500"
            :class="
              currentTab === 'ClosedAdvertTab'
                ? 'bg-gray-600 opacity-50 focus:outline-none focus:text-white'
                : ''
            "
            @click="switchTab('ClosedAdvertTab')"
          >
            Closed <span>(0)</span>
          </button>
          <button
            class="px-3 py-2 text-xs flex items-center rounded-lg text-gray-500"
            :class="
              currentTab === 'AllAdvertTab'
                ? 'bg-gray-600 opacity-50 focus:outline-none focus:text-white'
                : ''
            "
            @click="switchTab('AllAdvertTab')"
          >
            All <span>(0)</span>
          </button>
        </div>
      </div>
      <div class="px-4 py-6 shadow bg-white border-t border-gray-200 w-full">
        <keep-alive>
          <ActiveAdvertTab :is="currentTab" />
          <ReviewAdvertTab :is="currentTab" />
          <DeclinedAdvertTab :is="currentTab" />
          <DraftAdvertTab :is="currentTab" />
          <ClosedAdvertTab :is="currentTab" />
          <AllAdvertTab :is="currentTab" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdvertTabComponent",
  components: {
    ActiveAdvertTab: () => import("@/components/profile/tabs/ActiveAdvertTab"),
    ReviewAdvertTab: () => import("@/components/profile/tabs/ReviewAdvertTab"),
    DeclinedAdvertTab: () =>
      import("@/components/profile/tabs/DeclinedAdvertTab"),
    DraftAdvertTab: () => import("@/components/profile/tabs/DraftAdvertTab"),
    ClosedAdvertTab: () => import("@/components/profile/tabs/ClosedAdvertTab"),
    AllAdvertTab: () => import("@/components/profile/tabs/AllAdvertTab"),
  },
  data() {
    return {
      currentTab: "ActiveAdvertTab",
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style lang="css" scoped>
</style>
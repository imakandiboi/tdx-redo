<template>
  <div>
    <div class="w-full shadow-lg py-4 rounded-md bg-white">
      <div class="mt-4">
        <img
          src="/icons/programmer.svg"
          class="rounded-full h-24 w-24 mx-auto"
          alt=""
        />
        <p class="text-center my-3 tracking-wide text-2xl text-gray-800">
          Owolabi Oluwadropcode
        </p>
      </div>
      <div class="pt-4">
        <ul>
          <li
            v-for="tab in tabs"
            :key="tab.name"
            class="w-full border-b border-gray-200 bg-white py-4 flex items-center justify-start cursor-pointer px-4 space-x-4"
            @click="changeTab(tab)"
          >
            <img :src="'/icons/' + tab.icon" alt="" class="h-6 w-6" />
            <span
              class="text-lg tracking-tight text-gray-700"
              :class="
                selectedTab === tab.component ? 'text-explorerGreen-300' : ''
              "
              >{{ tab.name }}</span
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProfileSidebar",
  props: {
    tabs: { type: Array, required: true },
    selectedTab: { type: String, required: true },
  },
  data() {
    return {};
  },
  methods: {
    changeTab(tab) {
      this.$emit("switchTab", tab);
    },
  },
};
</script>
<style lang="css" scoped></style>
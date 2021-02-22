<template>
  <div class="mt-12">
    <div class="w-11/12 mx-auto pb-12 grid grid-flow-col space-x-4">
      <div class="">
        <ProfileSidebar
          :tabs="tabs"
          :selectedTab="currentTab"
          @switchTab="ChangeTab"
        />
      </div>
      <div class="overflow-scroll">
        <div class="bg-white shadow-md rounded-md overflow-scroll">
          <keep-alive>
            <AdvertTabComponent :is="currentTab" />
            <FeedbackTabComponent :is="currentTab" />
            <FollowersTabComponent :is="currentTab" />
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ProfileSidebar from "@/components/profile/ProfileSidebar";
export default {
  components: {
    ProfileSidebar,
    AdvertTabComponent: () => import("@/components/profile/AdvertTabComponent"),
    FeedbackTabComponent: () =>
      import("@/components/profile/FeedbackTabComponent"),
    FollowersTabComponent: () =>
      import("@/components/profile/FollowersTabComponent"),
  },
  data() {
    return {
      currentTab: "AdvertTabComponent",
      tabs: [
        {
          name: "My Adverts",
          type: "tab",
          component: "AdvertTabComponent",
          icon: "advert.svg",
        },
        {
          name: "Make money on tradexplora",
          type: "link",
          route: "AdvertTabComponent",
          icon: "money.svg",
        },
        {
          name: "Feedback",
          type: "tab",
          component: "FeedbackTabComponent",
          icon: "feedback.svg",
        },
        {
          name: "Followers",
          type: "tab",
          component: "FollowersTabComponent",
          icon: "followers.svg",
        },
        {
          name: "Settings",
          type: "link",
          route: "Settings",
          icon: "settings.svg",
        },
      ],
    };
  },
  methods: {
    ChangeTab(tab) {
      if (tab.type == "tab") {
        return (this.currentTab = tab.component);
      }
      console.log(tab);
    },
  },
};
</script>
		<style lang="scss" scoped></style>
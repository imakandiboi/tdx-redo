<template>
  <div>
    <EmptyData :messageTitle="emptyTitle" tabIcon="feedbackTab.svg" iconClass="mx-auto h-24 w-24"/>
    <div class="w-full mx-auto flex items-center justify-center mt-2">
    </div>
  </div>
</template>

<script>
import EmptyData from "@/components/layout/handlers/EmptyTab";
export default {
	components: { EmptyData },
	data() {
		return {
			emptyTitle: "You have no opinions yet.",
		};
	},
};
</script>
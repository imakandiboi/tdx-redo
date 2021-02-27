<template>
 <div>
    <EmptyData :messageTitle="emptyTitle" :messageBody="emptyMessage" tabIcon="feedbackTab.svg" iconClass="mx-auto h-24 w-24"/>
    <div class="w-full mx-auto flex items-center justify-center mt-2">
    <button class="mx-auto text-center w-6/12 bg-explorerGreen-300 rounded-md text-white text-sm py-3 px-4">Copy my link</button>
    </div>
  </div>
</template>

<script>
import EmptyData from "@/components/layout/handlers/EmptyTab";
export default {
	components: { EmptyData },
	data() {
		return {
			emptyTitle: "No Recieved Feedback",
			emptyMessage: "There are no Feedback yet. Ask your customers leave feedback about you. Copy the link and send them.",
		};
	},
};
</script>
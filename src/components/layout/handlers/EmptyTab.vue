<template>
	<div>
		<img src="/icons/empty-data.jpg" class="h-64 w-64 mx-auto" alt="" v-show="!tabIcon"/>
		<img :src="`/icons/${tabIcon}`" :class="iconClass" alt="" v-show="tabIcon"/>
		<div class="mt-4">
			<p
				class="font-light tracking-wide text-xl text-gray-500 text-center"
			>
				{{ messageTitle }}
			</p>
			<p
				class="font-light my-2 tracking-wide text-sm text-gray-500 text-center w-72 mx-auto"
			>
				{{ messageBody }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: "EmptyTab",
	props: { messageTitle: { type: String, required: true }, messageBody: String, tabIcon: String, iconClass: String },
	data() {
		return {};
	},
};
</script>

<style lang="css" scoped></style>

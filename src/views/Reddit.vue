<template>
	<postItems msg="Enter subreddit here" itemType="redditpost"></postItems>
</template>

<script>
import postItems from "@/components/postItems.vue"

export default {
	name: "Todos",
	components: {
		postItems
	},
};
</script>
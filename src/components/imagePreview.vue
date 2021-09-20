<template>
	<div>
		<button @click="$emit('clear-preview')">Clear</button>
		<div>
			<img v-for="s in preview" :key="s" :src="s" />
		</div>
	</div>
</template>

<script>
export default {
	props: [
		'preview'
	]
}
</script>

<style scoped>
img {
	width: 33%;
	height: 160px;
	object-fit: cover;
	margin: 1px 0px;
}
</style>
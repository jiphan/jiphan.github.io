<template>
	<div>
		<button @click="$emit('clear-preview')">Clear</button>
		<div>
			<img v-for="s in preview" :key="s.key" :src="s.data" @click="$emit('clear-item', s.key)"/>
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
	width: 30%;
	height: 160px;
	object-fit: cover;
	margin: 1px;
}
</style>
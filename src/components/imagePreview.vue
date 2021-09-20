<template>
	<div>
		<input type="file" @change="previewFile" multiple /><br />
		<img v-for="s in source" :key="s" :src="s" />
	</div>
</template>

<script>
export default {
	props: [
		'preview'
	],
	data() {
		return {
			source: []
		}
	},
	methods: {
		previewFile(event) {
			for (let i of event.target.files) {
				const reader = new FileReader()
				reader.onload = () => {
					this.source.push(reader.result)
				}
				reader.readAsDataURL(i)
			}
		}
	}
}
</script>

<style>
img {
	width: 33%;
}
</style>
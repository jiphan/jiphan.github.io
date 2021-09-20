<template>
	<postItem ref="postItem" @preview="receivePreview" class="comp" />
	<imagePreview
		v-show="parentPreview.length > 0"
		v-bind:preview="parentPreview"
		@clear-preview="clearPreviews"
		class="comp"
	/>
</template>

<script>
import postItem from "@/components/postItem.vue"
import imagePreview from "@/components/imagePreview.vue"
export default {
	name: "Dev",
	components: {
		postItem,
		imagePreview,
	},
	methods: {
		receivePreview(data) {
      console.log(data)
			this.parentPreview = data
		},
    clearPreviews() {
      this.parentPreview = []
      this.$refs.postItem.clearPreviews()
    }
	},
	data() {
		return {
			parentPreview: []
		}
	}
};
</script>

<style>
</style>
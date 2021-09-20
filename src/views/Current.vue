<template>
	<postItem ref="postItem" @preview="receivePreview" class="comp" />
	<imagePreview
		v-show="parentPreview.length > 0"
		v-bind:preview="parentPreview"
		@clear-preview="clearPreviews"
    @clear-item="clearItem"
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
      // if (this.parentPreview.includes(data)) return
			this.parentPreview = [...this.parentPreview, data]
		},
    clearPreviews() {
      this.parentPreview = []
    },
    clearItem(id) {
      this.parentPreview = this.parentPreview.filter(i => i.key !== id)
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
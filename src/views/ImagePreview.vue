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
			this.parentPreview = [...this.parentPreview, data]
			this.savePreviews()
		},
		clearPreviews() {
			this.parentPreview = []
			this.savePreviews()
		},
		clearItem(id) {
			this.parentPreview = this.parentPreview.filter(i => i.key !== id)
			this.savePreviews()
		},
		savePreviews() {
			const parsed = JSON.stringify(this.parentPreview)
			console.log(parsed)
			localStorage.setItem("preview", parsed)
		},
	},
	data() {
		return {
			parentPreview: []
		}
	},
  mounted() {
    if (localStorage.getItem("preview")) {
      this.parentPreview = JSON.parse(localStorage.getItem("preview"))
    }
  },
};
</script>
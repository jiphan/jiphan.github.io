<template>
	<postForm
		ref="postForm"
		@preview="receivePreview"
		class="comp"
		msg="Drag image here"
	/>
	<imagePreview
		v-show="parentPreview.length > 0"
		v-bind:preview="parentPreview"
		@clear-preview="clearPreviews"
		@clear-item="clearItem"
		class="comp"
	/>
</template>

<script>
import postForm from "@/components/postForm.vue"
import imagePreview from "@/components/imagePreview.vue"
export default {
	name: "Dev",
	components: {
		postForm,
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
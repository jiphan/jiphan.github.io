<template>
	<div @dragover.prevent @drop.prevent @drop="dragFile">
		<input
			type="text"
			:placeholder="msg"
			v-model="content"
			class="field"
			@keydown.enter="onPost"
		/>
		<button
			:disabled="content.length == 0"
			@click="onPost"
			style="outline: none"
		>
			Post
		</button>
	</div>
</template>

<script>
import { v4 } from "uuid"
export default {
	name: "postItem",
	props: {
		msg: String,
	},
	methods: {
		onPost() {
			if (!this.content) return
			this.$emit("add-row-bulk", [
				{
					id: v4(),
					msg: this.content,
					bold: false,
				},
			])
			this.content = ""
		},
		dragFile(e) {
			let arr = []
			if (e.dataTransfer.getData("text")) {
				arr = this.handleText(e.dataTransfer.getData("text"))
			} else if (e.dataTransfer.files) {
				arr = Array.from(e.dataTransfer.files)
					.map(i => this.handleImage(i))
			}
			this.$emit("add-row-bulk", arr)
		},
		handleText(text) {
			return text
				.replace("\r", "")
				.split("\n")
				.filter((i) => i.length > 0)
				.map((i) => {
					return {
						id: v4(),
						msg: i,
						bold: false,
					}
				})
		},
		handleImage(file) {
			const reader = new FileReader()
			reader.onload = () => {
				this.$emit("preview", {
					key: v4(),
					data: reader.result
				})
			}
			reader.readAsDataURL(file)
			return {
				id: v4(),
				msg: file.name,
				bold: false,
			}
		}
	},
	data() {
		return {
			content: "",
			file: [],
		}
	},
}
</script>
<style scoped>
div {
	display: flex;
	user-select: none;
}
.field {
	width: 100%;

	box-sizing: border-box;
	padding: 2px 4px 3px;
	border: 1px solid Gainsboro;
	font: 14px sans-serif;
	outline: none;
	transition: color 0.25s, border-color 0.25s;
}
.field:focus {
	border-color: rgb(129, 162, 190) !important;
}
textarea.field {
	min-height: 6em;
	resize: none;
}
</style>
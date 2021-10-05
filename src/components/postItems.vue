<template>
	<postForm class="comp" @add-row-bulk="addRowBulk" :msg="msg" />
	<component
		:is="itemType"
		v-for="r in rows.slice().reverse()"
		:key="r.id"
		:post="r"
		@del-row="delRow"
		@bold-row="boldRow(r.id)"
		class="comp"
	></component>
</template>

<script>
import postForm from "@/components/postForm.vue"
import item from "@/components/item.vue"
import redditpost from "@/components/redditpost.vue"
import axios from 'axios'

export default {
	props: {
		itemType: String,
		msg: String
	},
	components: {
		postForm,
		item,
		redditpost
	},
	methods: {
		delRow(post) {
			if (post.bold) return
			this.rows = this.shift ? [] : this.rows.filter((row) => row.id !== post.id)
			this.saveRows()
		},
		boldRow(i) {
			this.rows.map((row) => {
				if (row.id === i) row.bold = !row.bold
			})
			this.saveRows()
		},
		async addRowBulk(rows) {
			if (this.itemType == 'item') {
				this.rows = [...this.rows, ...rows]
				this.saveRows()
			} else if (this.itemType == 'redditpost') {
				this.rows = []

				let subreddit = rows[0].msg.split('/').pop()
				let res = await axios.get(`https://3.20.90.30:3000/api/reddit/${subreddit}`)
				this.rows = [...res.data]
			}
		},
		saveRows() {
			const parsed = JSON.stringify(this.rows)
			localStorage.setItem(this.itemType, parsed)
		}
	},
	data() {
		return {
			rows: [
				{ id: 0, msg: "item 1", bold: false },
				{ id: 1, msg: "item 2", bold: false },
				{ id: 2, msg: "item 3", bold: false },
			],
			shift: false
		}
	},
	mounted() {
		if (localStorage.getItem(this.itemType)) {
			this.rows = JSON.parse(localStorage.getItem(this.itemType))
		}
		window.addEventListener('keydown', e => {
			if (e.shiftKey) this.shift = true
		})
		window.addEventListener('keyup', e => {
			if (!e.shiftKey) this.shift = false
		})
		if (this.itemType == 'redditpost') {
			this.rows = []
		}
	},
};
</script>
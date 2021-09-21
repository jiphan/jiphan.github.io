<template>
	<div>{{ gamepadName }}</div>
	<br />
	<div>
		<span
			v-for="(b, i) in buttons"
			:key="i"
			:class="{ emphasis: b.value === 1 }"
		>
			{{ b.value.toFixed(2) }}
			<br v-show="(i + 1) % 4 === 0" />
		</span>
	</div>
	<br />
	<div>
		<span
			v-for="(a, i) in axes"
			:key="i"
			:class="{ emphasis: Math.abs(a) === 1 }"
		>
			{{ a.toFixed(2).toString().padStart(5, "+") }}
			<br v-show="(i + 1) % 2 === 0" />
		</span>
	</div>
</template>

<script>
export default {
	mounted() {
		window.addEventListener("gamepadconnected", () => {
			let gp = navigator.getGamepads()[0]
			this.gamepadName = gp.id
			let frame = window.setInterval(() => {
				gp = navigator.getGamepads()[0]
				if (gp !== null) {
					this.buttons = gp.buttons
					this.axes = gp.axes
				} else {
					this.gamepadName = 'no controller detected'
					this.buttons = []
					this.axes = []
					window.clearInterval(frame)
				}
			}, 30)
		})
	},
	data() {
		return {
			gamepadName: 'no controller detected',
			buttons: [],
			axes: []
		}
	}
}
</script>

<style scoped>
div {
	font-family: monospace;
}
.emphasis {
	font-weight: bold;
	background-color: slategray;
	color: white;
}
</style>
<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/todos">Todos</router-link> |
		<router-link to="/images">Images</router-link> |
		<router-link to="/controller">Controller</router-link> |
		<a href="https://github.com/jiphan/jiphan.github.io" target="_blank"
			>About</a
		>
	</div>
	<router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
body {
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
}
body::-webkit-scrollbar {
	display: none;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
.comp {
	background-color: white;
	margin: 1rem auto;
	padding: 1rem;
	box-shadow: 0 2px 4px 0 rgba(24, 20, 20, 0.2),
		0 2.5rem 5rem 0 rgba(0, 0, 0, 0.1);
	max-width: 480px;
}
</style>

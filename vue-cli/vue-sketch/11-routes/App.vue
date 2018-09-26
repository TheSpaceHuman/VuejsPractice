<template>
  <div id="app">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="collapse navbar-collapse">
				<div class="navbar-nav">

					<!--<router-link></router-link>-->
					<!--<router-link tag="li" class="nav-item" to="/" active-class="active"><a>Home</a></router-link>-->

					<router-link class="nav-item nav-link" active-class="active" exact to="/">Home</router-link>
					<router-link class="nav-item nav-link" active-class="active" to="/cars">Cars</router-link>
					<router-link class="nav-item nav-link" active-class="active" to="/forms">Forms</router-link>

				</div>
			</div>
		</nav>
		<router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',

}
</script>

<style scoped>

</style>

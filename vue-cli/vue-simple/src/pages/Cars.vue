<template>
  <div id="cars">
		<div class="container">
			<h1 class="text-center">Cars pages</h1>
			<ul>
				<router-link tag="li" v-for="car in 6" :to="'/car/' + car " :key="car">
					<a>Car {{ car }}</a>
				</router-link>
			</ul>
		</div>

	</div>
</template>

<script>
  export default {
    name: "Cars"
  }
</script>

<style scoped>

</style>

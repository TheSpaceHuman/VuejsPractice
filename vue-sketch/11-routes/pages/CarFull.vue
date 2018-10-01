<template>
  <div>
		<h4>Car name: {{ $route.query.name }}</h4>
		<h4>Car year: {{ year }}</h4>
		<div class="scroll"></div>
		<h3 id="scroll">Scroll text</h3>
		<div class="scroll"></div>

	</div>
</template>

<script>
  export default {
    name: "CarFull",
		computed: {
    	year () {
				return this.$route.query.year
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log('beforeRouteEnter')
			next()
		}
  }
</script>

<style scoped>
	.scroll {
		width: 100%;
		height: 800px;
		background-color: gray;
	}
</style>

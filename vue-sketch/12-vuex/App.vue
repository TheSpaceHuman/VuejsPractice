<template>
  <div class="container text-center py-4">
		<h1>{{ title }}</h1>
		<appCounter></appCounter>
		<appSecondCounter></appSecondCounter>
		<hr>
		<appAction></appAction>
	</div>
</template>

<script>

export default {
	computed: {
		title () {
			return this.$store.getters.title
		}
	}
}
</script>

<style scoped>

</style>

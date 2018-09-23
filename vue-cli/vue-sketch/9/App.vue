<template>
  <div id="app">
		<h2>Form</h2>
		<app-onoff v-model="switched"></app-onoff>
		<div>
			<h3 v-if="switched">Component is enable</h3>
			<h3 v-else>Component is disabled</h3>
		</div>
  </div>
</template>

<script>

export default {
  name: 'app',
	data () {
		return {
			switched: true
		}
	}

}
</script>

<style scoped>

</style>

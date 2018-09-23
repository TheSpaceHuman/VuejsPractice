<template>
  <div id="app">
		<h2 >{{ title }}</h2>
		<hr>
		<input type="text" v-model="searcheName">
		<hr>
		<ul>
			<li v-for="name of filterNames">{{ name }}</li>
		</ul>
		<hr>
		<appList></appList>
  </div>
</template>

<script>
import ListMixin from './listMixin.js'

export default {
  name: 'app',
	data () {
		return {
			title: 'Main comnonent'
		}
	},
	mixins: [ListMixin],
	filters: {
		lowercase(v) {
			return v.toLowerCase()
		}
	}
}
</script>

<style scoped>

</style>

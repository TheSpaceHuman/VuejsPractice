<template>
  <div>
		<h2 >{{ title }}</h2>
		<hr>
		<input type="text" v-model="searcheName">
		<hr>
		<ul>
			<li v-for="name of filterNames">{{ name }}</li>
		</ul>
	</div>
</template>

<script>
	import ListMixin from './listMixin.js'

  export default {
    name: "List",
		data () {
			return {
				title: 'List'
			}
		},
		mixins: [ListMixin]
  }
</script>

<style scoped>

</style>

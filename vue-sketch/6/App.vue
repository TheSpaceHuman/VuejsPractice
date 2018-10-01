<template>
  <div id="app">
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
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello!!!',
			searcheName: '',
			names: ['Vlad', 'Igor', 'Andrey', 'Anna']
    }
  },
	computed: {
  	filterNames() {
  		return this.names.filter(name => {
  			return name.toLowerCase().indexOf(this.searcheName.toLowerCase()) !== -1
			})
		}
	},
	filters: {
  	lowercase(v) {
  		return v.toLowerCase()
		}
	}
}
</script>

<style scoped>

</style>

<template>
  <div id="app">
			<h2 >{{ title }}</h2>
			<h2 >{{ title | lowercase}}</h2>
			<h2 >{{ title | uppercase}}</h2>
			<h2 >{{ title | uppercase | lowercase}}</h2>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Hello!!!'
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

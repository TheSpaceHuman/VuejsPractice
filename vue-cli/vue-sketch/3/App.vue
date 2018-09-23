<template>
  <div id="app">
			<h2 v-colored:background="'gray'" v-colored:color="'blue'"  v-if="visible">{{ title }}</h2>
			<p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam laudantium, magni minima officia unde.</p>
			<button  @click="visible = !visible">Toggle</button>
			<button  @click="carName = 'New title'">Update</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'TITTLE',
			visible: true
    }
  }
}
</script>

<style scoped>
	h2 {
		color: black;
	}
</style>

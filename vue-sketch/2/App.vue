<template>
  <div id="app">
		<appCar>
			<h2 slot="title" v-if="visible">{{ carName }}</h2>
			<p slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam laudantium, magni minima officia unde.</p>
			<button slot="button" @click="visible = !visible">Toggle</button>
		</appCar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford',
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

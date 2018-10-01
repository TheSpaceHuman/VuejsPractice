<template>
  <div id="app">
			<h2 v-colored:background.font="'gray'">{{ title }}</h2>
			<h2 v-colored:color.delay.font="'blue'">{{ title }}</h2>
			<p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam laudantium, magni minima officia unde.</p>
			<hr>
			<h2 v-font>Lorem ipsum dolor sit.</h2>
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
  },
	directives: {
  	font: {
			bind(el, bindings, vnode) {
				el.style.fontSize = '40px'
			}
		}
	}
}
</script>

<style scoped>
	h2 {
		color: black;
	}
</style>

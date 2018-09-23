<template>
  <div id="app">
		<h1>Parent: {{ carName }}</h1>

		<appCounter @counterUpdated="counter = $event"></appCounter>

		<appCar :carName="carName"
						:carYear="carYear"
						@namechanged="carName = $event"
						:changeFunc="changeToAudi"
						@counterUpdated="counter = $event"></appCar>
  </div>
</template>

<script>
import Car from './Car.vue'
import Counter from './Counter.vue'

export default {
  name: 'app',
  data () {
    return {
      carName: 'Ford parents',
			carYear: 2017
			// counter: 0
    }
  },
	methods: {
  	changeToAudi() {
  		this.carName = 'Audi'
		}
	},
	components: {
  	appCar: Car,
		appCounter: Counter
	}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

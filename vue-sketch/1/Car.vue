<template>
	<div class="car">
		<h3>Name: {{ carName }} /  Refers: {{ reversName }} </h3>
		<p>Year: {{ carYear }}</p>
		<button @click="changeName">Change name</button>
		<button @click="changeFunc()">Change parent</button>
		<button @click="updateCounter">Update counter</button>
	</div>
</template>

<script>
  import {eventEmitter} from "./main";

	export default {
  	// props: ['carName', 'carYear'],
		/*props: {
			carName: String,
			carYear: Number
		}*/
		props: {
			carName: {
				type: String,
				// required: true,
				default: 'Defauld FORD',
			},
			carYear: Number,
			changeFunc: Function
			// counter: Number
		},
		computed: {
  		reversName() {
  			return this.carName.split('').reverse().join('')
			}

		},
		methods: {
			changeName() {
				this.carName = 'Mazda'
				this.$emit('namechanged', this.carName = 'Mazda')
			},
			updateCounter() {
				// this.$emit('counterUpdated', this.counter + 1)
				eventEmitter.$emit('counterUpdated', 5)
			}
		}
	}
</script>
<style>
	.car {
		border: 1px solid green;
		padding: 15px;
	}
	.car h3 {
		color: red;
	}
</style>


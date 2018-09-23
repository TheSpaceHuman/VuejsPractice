<template>
	<div>
		<button class="on" :class="{'active': value}" @click="onChange(true)">On</button>
		<button class="off" :class="{'active': !value}" @click="onChange(false)">Off</button>
	</div>
</template>

<script>
  export default {
    name: "Onoff",
		props: ['value'],
		methods: {
    	onChange(newValue) {
				this.$emit('input', newValue)
			}
		}
  }
</script>

<style scoped>
	button {
		border: none;
		padding: 8px 15px;
		cursor: pointer;
		margin-right: 20px;
	}
	button:active {
		box-shadow: inset 1px 1px 2px rgba(0,0,0, .5);
	}
	.on.active {
		background: green;
		color: white;
	}
	.off.active {
		background: darkred;
		color: white;
	}
</style>

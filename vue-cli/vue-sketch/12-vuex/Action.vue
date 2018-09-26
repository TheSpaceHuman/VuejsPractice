<template>
  <div>
		<button class="btn btn-outline-success"  @click="updateCounter(1)">Add</button>
		<button class="btn btn-outline-danger" @click="updateCounter(-1)">Subtract</button>
	</div>
</template>

<script>
  export default {
		methods: {
			updateCounter (val) {
				// this.$emit('updateCounter', val)
				// this.$store.state.counter += val
				// this.$store.commit('changeCounter',val)
				this.$store.dispatch('asyncChangeCounter', {
					counterValue: val,
					timeoutDelay: 200
				})
			}
		}
  }
</script>

<style scoped>

</style>

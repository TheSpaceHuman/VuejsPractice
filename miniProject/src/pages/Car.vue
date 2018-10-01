<template>
	<div id="car">
		<div class="container">
			<h1>Car id {{ id }}</h1>
			<button class="btn btn-outline-primary my-4 mr-5"
			@click="goBackToCars" style="display: inline-block">
				Back
			</button>
		<!--	<router-link
				class="btn btn-outline-info my-4"
				tag="button"
				:to="'/car/'+ id +'/full'"


				style="display: inline-block">
				Full info
			</router-link>-->
			<router-link
				class="btn btn-outline-info my-4"
				tag="button"
				:to="{name: 'carFull', param: { id: id }, query: {name: 'Audi', year: 2004}, hash: '#scroll'}"
				style="display: inline-block">
				Full info
			</router-link>
			<hr>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Car",
		data() {
    	return {
    		// id: this.$router.currentRoute.params['id']
			id: this.$route.params['id']
    	}
		},
		methods: {
			goBackToCars () {
				this.$router.push('/cars')
			}
		},
		watch: {
    	$route (toR, fromR) {
    		this.id = toR.params['id']
			}
		},
		beforeRouteLeave (to, from, next) {
      console.log('beforeRouteLeave')
      if (window.confirm('Are you sure ypu want to leave?')) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style scoped>

</style>

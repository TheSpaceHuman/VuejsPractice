<template>
  <div id="app">
		<div class="container">
			<form class="my-4">
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" class="form-control" v-model="email" @blur="$v.email.$touch()">
				</div>

				<pre>
					{{ $v }}
				</pre>
			</form>
		</div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'app',
	data () {
		return {
			email: ''
		}
	},
	validations: {
  	email: {
			// required: required
			required,
			email
		}
	}

}
</script>

<style scoped>

</style>

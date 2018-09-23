<template>
  <div id="app">
		<div class="container">
			<form class="my-4" @submit.prevent="onSubmit">
				<div class="form-group">
					<label for="email">Email</label>
					<input type="email"
								 id="email"
								 class="form-control "
								 :class="{'is-invalid': $v.email.$error}"
								 v-model="email"
								 @blur="$v.email.$touch()"
					>
					<div class="invalid-feedback" v-if="!$v.email.required">Email field is required</div>
					<div class="invalid-feedback" v-if="!$v.email.email">This field should be an email</div>
					<div class="invalid-feedback" v-if="!$v.email.uniqEmail">This email is used</div>
				</div>

				<div class="form-group">
					<label for="password">Password</label>
					<input type="password"
								 id="password"
								 class="form-control "
								 :class="{'is-invalid': $v.password.$error}"
								 v-model="password"
								 @blur="$v.password.$touch()"
					>
					<div class="invalid-feedback" v-if="!$v.password.minLength">
						Min Length of password is {{ $v.password.$params.minLength.min }}. Now it is {{ password.length }}
					</div>
				</div>

				<div class="form-group">
					<label for="confirm">Confirm password</label>
					<input type="password"
								 id="confirm"
								 class="form-control "
								 :class="{'is-invalid': $v.confirmPassword.$error}"
								 v-model="confirmPassword"
								 @blur="$v.confirmPassword.$touch()"
					>
					<div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
						Passwords should match
					</div>
				</div>
				<button
					class="btn btn-success"
					type="submit"
					:disabled="$v.$invalid"
				>Submit</button>
				<!--<pre>
					{{ $v }}
				</pre>-->
			</form>
		</div>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
  name: 'app',
	data () {
		return {
			email: '',
			password: '',
			confirmPassword:''
		}
	},
	validations: {
  	email: {
			// required: required
			required,
			email,
			uniqEmail: (newEmail) => {
				if (newEmail === '') return true
				// return newEmail !== 'test@mail.ru'
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						const value = newEmail !== 'test@mail.ru'
						resolve(value)
					}, 3000)
				})
			}
		},
		password: {
			minLength: minLength(6)
		},
		confirmPassword: {
  		// sameAs: sameAs('password')
  		sameAs: sameAs((vue) => {
  			return vue.password
			})
		}
	},
	methods: {
  	onSubmit() {
  		console.log('Email', this.email)
  		console.log('Password', this.password)
			this.email = ''
			this.password = ''
			this.confirmPassword=''
		}
	}

}
</script>

<style scoped>

</style>

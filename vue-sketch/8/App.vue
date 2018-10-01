<template>
  <div id="app">
		<h2>{{ nameForm }}</h2>
		<input type="text" v-model="input">
		<p>{{ input }}</p>
		<hr>
		<textarea v-model="textarea"></textarea>
		<p>{{ textarea }}</p>
		<hr>
		<label><input type="checkbox" value="instagman" v-model="social">Instagram</label>
		<label><input type="checkbox" value="telegram" v-model="social">Telegram</label>
		<label><input type="checkbox" value="fb" v-model="social">Facebook</label>

		<ul>
			<li v-for="s of social">{{s}}</li>
		</ul>
		<hr>
		<label><input type="radio" value="dog" v-model="pets">Собака</label>
		<label><input type="radio" value="cat" v-model="pets">Кот</label>
		<label><input type="radio" value="hedgehog" v-model="pets">Ёж</label>
		<p>{{pets}}</p>
		<hr>
		<select v-model="select">
			<option v-for="sl in socialList">{{ sl }}</option>
		</select>
		<p>{{select}}</p>
		<hr>
		<input type="text" v-model.number="age">
		<p>{{age}}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
	data () {
		return {
			nameForm: 'All forms',
			input: '',
			textarea: 'lorem...',
			social: ['fb'],
			pets: 'dog',
			socialList: ['fb', 'vk', 'telegram'],
			select: 'vk',
			age: 10
		}
	},
	watch: {
  	age (value) {
  		console.log(value)
			console.log(typeof value)
		}
	}

}
</script>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,700');
	body {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: 18px;
	}
	textarea {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		width: 400px;
		height: 120px;
	}
	p {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		font-size: 18px;
		white-space: pre;
	}
	h2 {
		font-family: 'Montserrat', sans-serif;
		font-weight: 700;
		font-size: 25px;
		color: darkred;
		padding: 10px;
	}
	label, ul, select {
		font-family: 'Montserrat', sans-serif;
		font-weight: 300;
		font-size: 16px;
	}
</style>

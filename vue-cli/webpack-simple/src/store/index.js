import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		counter: counter
	},
	state:{
		title: 'Hello Vuex'
	},
	mutations: {

	},
	actions: {

	},
	getters: {
		title (state) {
			return state.title + '!!!'
		}
	}
})

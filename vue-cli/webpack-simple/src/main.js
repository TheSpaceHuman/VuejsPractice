import Vue from 'vue'
import App from './App.vue'
import Action from './Action'
import Counter from './Counter'
import SecondCounter from './SecondCounter'
import store from './store'

Vue.component('appAction', Action)
Vue.component('appCounter', Counter)
Vue.component('appSecondCounter', SecondCounter)


new Vue({
  el: '#app',
	store,
  render: h => h(App),
})

import Vue from 'vue'
import App from './App.vue'
import Onoff from './Onoff.vue'

Vue.component('app-onoff', Onoff)

new Vue({
  el: '#app',
  render: h => h(App)
})

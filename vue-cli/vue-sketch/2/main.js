import Vue from 'vue'
import App from './App.vue'
import Car from './Car.vue'
Vue.component('appCar', Car);

new Vue({
  el: '#app',
  render: h => h(App)
})

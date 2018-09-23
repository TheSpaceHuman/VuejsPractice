import Vue from 'vue'
import App from './App.vue'
import ColorDirective from './color'
//import Car from './Car.vue'
//Vue.component('appCar', Car);
Vue.directive('colored', ColorDirective);


new Vue({
  el: '#app',
  render: h => h(App)
})

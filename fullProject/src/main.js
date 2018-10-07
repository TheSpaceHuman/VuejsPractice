import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    // Initialize Firebase
    fb.initializeApp({
      apiKey: 'AIzaSyCNV9OfRxZpNQ3cwWZSh9hou_-uRhCKbwo',
      authDomain: 'its-full-project.firebaseapp.com',
      databaseURL: 'https://its-full-project.firebaseio.com',
      projectId: 'its-full-project',
      storageBucket: 'its-full-project.appspot.com',
      messagingSenderId: '344839663370'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    this.$store.dispatch('fetchAds')
  }
})

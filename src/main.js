import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-analytics.js";

import  firebase  from 'firebase'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxBV5n2W0C0u0038L0sg54B3cIkBGq-MQ",
  authDomain: "new-vue-f4e22.firebaseapp.com",
  projectId: "new-vue-f4e22",
  storageBucket: "new-vue-f4e22.appspot.com",
  messagingSenderId: "366136679423",
  appId: "1:366136679423:web:3b1c806f69a144ce5a65ca",
  measurementId: "G-GW1VEDPY85"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
firebase.initializeApp(firebaseConfig)
firebase.analytics()

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

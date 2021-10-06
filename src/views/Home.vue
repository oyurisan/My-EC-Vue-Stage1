<template>
  <!-- <hello-world /> -->
  <v-app>
  <v-btn @click="login">Googleアカウントでログイン</v-btn>
  <v-toolbar-items v-if="$store.state.login_user"></v-toolbar-items>
  <v-btn text @click="logout">ログアウト</v-btn>
  <v-list-item>
  <img v-if="photoURL" :src="photoURL">
  <p>{{userName}}</p>
  </v-list-item>
  </v-app>
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'
// import { mapActions, mapGetters } from "vuex"
// import firebase from 'firebase'
  export default {
    name: 'Home',
    components: {
      // HelloWorld,
    },
    created(){
    // firebase.auth().onAuthStateChanged(user=>{
    //   if(user){
    //     this.setLoginUser(user)
    //   }else{
    //     this.deleteLoginUser()
    //   }
    // })
    },
    methods:{
      // ...mapActions(['setLoginUser','logout','deleteLoginUser','login'])
    },
    computed:{
      // ...mapGetters(["userName","photoURL"])
    }
  }
</script>

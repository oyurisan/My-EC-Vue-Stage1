<template>
  <v-app>
    <v-app-bar
      app
      color="secondar"
      dark>
      <div class="sen">
         <!-- <img v-if="photoURL" :src="photoURL">
  <p>{{userName}}</p> -->
    <v-btn>
    <router-link to="/">Home</router-link>
    </v-btn>
    <v-btn>
    <router-link to="/search">商品検索</router-link>
    </v-btn>
    <v-btn>
    <router-link to="/rireki">注文確認</router-link>
    </v-btn>
    <!-- <v-btn>
    <router-link to="/detail">商品詳細</router-link>
    </v-btn> -->
    <v-btn>
    <router-link to="/ordercheck">ショッピングカート</router-link>
    </v-btn>
    <v-btn @click="login">ログイン</v-btn>
     <v-btn text @click="logout">ログアウト</v-btn>
    </div>
    </v-app-bar>
     

      <v-spacer> </v-spacer>

    <v-main>
    </v-main>
    <!-- <router-link to="/">Homeへ戻る</router-link>
    <router-link to="/search">検索画面</router-link>
    <router-link to="/rireki">注文履歴</router-link>
    <router-link to="/detail">商品詳細</router-link>
    <router-link to="/ordercheck">注文確認</router-link> -->
    <router-view/>
  </v-app>
</template>

<script>
import firebase from 'firebase'
import { mapActions,mapGetters} from 'vuex'

export default {
  name: 'App',

  data: () => ({
    //
  }),
  
  created(){
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setLoginUser(user);
        this.fetchcart()
        if(this.$router.currentRoute.name==="Home"){
          this.$router.push({name:"Search"},()=>{});
        }
      }else{
        this.deleteLoginUser();
        this.$router.push({name:"Search"},()=>{})
      }
    })
    this.fetchFood()
  },

  methods:{
    ...mapActions(['setLoginUser','logout','deleteLoginUser','login',"fetchFood","fetchcart","editcart"])
  },
  computed:{
   ...mapGetters(["userName","photoURL"])
  }
};
</script>

<style>
.sen{
  color: azure;
}
</style>

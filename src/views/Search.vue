<template>
  <div class="about">
    <v-app>
    <h3>ラーメン検索</h3>
    <div class="kensaku">
    <v-text-field label="検索内容を入力" v-model="text" class="search" ></v-text-field>
    <v-btn @click="search()" style="width:50px" >検索</v-btn><v-btn @click="kuria()" value="text" style="width:50px">クリア</v-btn>
    </div>
    <div v-if="this.FoodList[0]">
    <span>商品数：{{FoodList[0].food.length}}</span>
     <div class="container">
      <div v-for="noodle in FoodList[0].food" :key="noodle.name">
        <div class="item">
    <p class="name">{{noodle.name}}</p>
    <p> <router-link :to="{name: 'Detail',params:{id:noodle.id}}"><img :src="noodle.image" @click="detail(noodle.id)" width="300" height="250"></router-link></p>
    <p>大￥{{noodle.priceL}}</p>
   <p>並￥{{noodle.priceM}}</p>
    <router-link :to="{name: 'Detail',params:{id:noodle.id}}"><v-btn class="button">商品詳細</v-btn></router-link>
    </div>
    </div>
   </div>  
    </div>
    <v-btn @click="check">確認</v-btn>
   </v-app>
</div>
</template> 

<script>
import {mapGetters} from 'vuex'

export default {
    name: 'Search',
    components: {
    },
    data(){
      return{
     text:'',
     FoodList:[],
     newfood:[]
    }
    },
    created(){
      this.FoodList=this.$store.state.Foods
      // 画面生成時には、商品たちを取って参る！ => Storeに保存
    },
    methods:{
    kuria(){
      this.text=''
    },
    check(){
      console.log(`FoodList[0].food`)
       console.log(this.FoodList[0].food)
       console.log(this.newfood)
       console.log(this.getfoodId)
    },
    detail(noodle){
      this.$router.push({path:'detail',params:{id:noodle.id}}) 
      console.log(this.$router.push({name:"Detail",params:{id:noodle.id}}) )
    },
    },
    computed: {
    ...mapGetters(['getfoodId']),
    search(){
    const newfood=this.FoodList[0].food
    console.log(newfood)
    return newfood.filter((noodle)=>{
    return noodle.name.match(this.text)
    })
    },
    },
  }

</script>

<style scoped>
.container{
  display: flex;
  flex-wrap:wrap;
}
.item{
  margin: 2px;
  align-content: stretch;
  font-family: serif;
  background-color:#eddcbc;
}
.abot{
  font-family: serif;
}
.name{
  border-width: thick;
  font-size: 19px;
  text-align:center;
}
.button{
  text-align: center;
}
.kensaku{
  text-align: center;
  display: flex;
}
.search{
  width: 20%;
}


</style>
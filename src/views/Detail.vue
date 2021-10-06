<template>
  <div class="detail">
    <h2>商品詳細</h2>

    <h3 class="name">{{getfoodId(this.$route.params.id).name}}</h3>
    <!-- <a><img :src="{{getfoodId(this.$route.params.id).image}}"></a> -->
    <p class="name">{{getfoodId(this.$route.params.id).explain}}</p>
    <h4>大￥{{getfoodId(this.$route.params.id).priceL}}</h4>
    <h4>並￥{{getfoodId(this.$route.params.id).priceM}}</h4>
  
   <v-radio-group>
     <p>
     大 300円(税抜) 並 200円(税抜) 
     </p>
     <input type="radio" label="サイズ" v-model="size" value="Lサイズ" id="L">大
     <input type="radio" label="サイズ" v-model="size" value="Mサイズ" id="M">並
    
   </v-radio-group>

   <p>数量を選択してください</p>
   <select style="width:50px" v-model="count">
     <option value="1">1</option>
     <option value="2">2</option>
     <option value="3">3</option>
     <option value="4">4</option>
   </select>
   
   <div class="name">
   <p>トッピング一覧</p>
   <div v-for="item in FoodList[1].Topping" :key="item.name" class="topping">
     <p class="not"> <label class="topping2"><input type="checkbox" class="not" v-model="itemtopping" :value="item.name">{{item.name}}</label></p>
   </div>
   </div>

   <h3>お客様の選択内容</h3>
   <h4>サイズ：{{size}}</h4>
   <h4>数量：{{count}}</h4>
    <p>金額：{{ totalprice }}</p>
    <p>消費税：{{totalprice*0.1}}</p> 
   <h4>合計金額：{{totalprice*1.1}}</h4>
   <v-btn @click="total()">合計金額計算</v-btn>
  
    <p><router-link :to="{ name: 'OrderCheck' }"><v-btn @click="gocart()">カートに追加</v-btn></router-link></p>

  </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'
export default {
    name: 'Detail',
    components: {
    },
    data(){
      return{
       FoodList:[],
       //トッピングの配列
       size:'',
       //数量
       items:{},
       //一覧画面からもらう情報
       itemtopping:[],
       //選択したトッピング
       count:0,
       //数量
       totalprice:0,
       //商品合計金額
       tax:0
       //消費税
      }
    },
    created(){
    //商品情報
     this.FoodList=this.$store.state.Foods
     //商品のIDを取得
     const kari=this.$sore.getters.getfoodId(this.$route.params.id)
     this.items=kari
    },
    methods:{
    ...mapActions(["addcart"]),

   check(){
   this.$router.push(`/ordercheck`)
   },
   //合計金額
   total(){
    if(this.size==="Lサイズ"){
    //合計金額＝選択したトッピングの数量＊２００＋数量
      return this.totalprice=this.itemtopping.length*300 +this.getfoodId(this.$route.params.id).priceL*this.count
    }else if(this.size==="Mサイズ"){
      return this.totalprice=this.itemtopping.length*200+this.getfoodId(this.$route.params.id).priceM*this.count
    }
     this.totalprice=Math.floor(1.5)
     this.tax=this.totalprice*0.1
   },
   test(){
    console.log(this.itemtopping.length*300 +this.getfoodId(this.$route.params.id).priceL*this.count)
   },
   //カートへ追加
   gocart(){
     let cartitem=[
       {
       food:this.getfoodId(this.$route.params.id)},
       {count:this.count},
       {totalprice:this.totalprice*1.1},
       {size:this.size},
       {topping:this.itemtopping}
     ]
     this.addcart(cartitem)
     console.log(cartitem)
   }
    },
    computed:{
      ...mapGetters(["getfoodId"])
    }
  }

</script>

<style scoped>
 .not{ white-space: nowrap;}
 /* .topping{
   display: flex;
 } */
 .topping{
   display: inline-block;
   /* background-color: bisque; */
 }
 .detail{
   font-family: serif;
 }
 .name{
   text-align: center;
   background-color: #e6f0f0;
 }
</style>


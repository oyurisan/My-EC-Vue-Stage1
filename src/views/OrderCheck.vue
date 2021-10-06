<template>
<div class=#check>
  <v-app>
  <h2 class="moji">ショッピングカート</h2>
  <div class="oya">
  <p>【商品名】</p><p>【サイズ、価格（税抜）、個数】</p><p>【小計】</p><p><v-btn>削除</v-btn></p>
  </div>
  <p>消費税</p>
  <p>ご注文金額合計</p>
  <router-link :to="{name:'Cart'}"><v-btn>注文する</v-btn></router-link>
  </v-app>
</div>
</template>
<script>
export default {
    name: 'OrderCheck',
    components: {
    },
    data(){
      return{

      }
    },
    methods:{

    },
    created(){

    },
    computed:{}
}

</script>

<style scoped>
.oya{
  display: flex;
  text-align: center;
  background-color: #e6f0f0;
}
.moji{
  text-align: center;
}
</style>
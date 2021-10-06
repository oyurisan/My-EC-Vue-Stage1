<template>
<div class="cart">
<v-app>
  <h3>注文内容確認</h3>
   <div class="oya">
  <p>【商品名】</p><p>【サイズ、価格（税抜）、個数】</p><p>【小計】</p>
  </div>
  <p>消費税</p>
  <p>ご注文金額合計</p>

  <h2>お届け先情報</h2>
  <v-text-field label="名前を入力" :counter="10" outlined dense></v-text-field>
  <v-text-field label="メールアドレスを入力" outlined dense></v-text-field>
  <v-text-field label="郵便番号を入力" outlined dense></v-text-field>
  <v-text-field label="電話番号を入力" outlined dense></v-text-field>
  配達日時：<input type="date">
  <div class="time">
  <input type="radio">10時
  <input type="radio">11時
  <input type="radio">12時
  <input type="radio">13時
  <input type="radio">14時
  <input type="radio">15時
  <input type="radio">16時
  </div>
  <div class="time">
  <h2>お支払い方法</h2>
  <input type="radio">代金引換
  <input type="radio">クレジットカード
  </div>
  <router-link :to="{name: 'Finish'}"><v-btn>注文を確定する</v-btn></router-link>
</v-app>
</div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

export default {
 name:'Cart'

}
</script>

<style scoped>
.name{
  background-color: red;
}
.time{
  display: flex;
}
.oya{
  display: flex;
  background-color: aqua;
}

</style>

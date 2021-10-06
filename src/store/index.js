import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login_user:null,
    //ユーザー情報
    Foods:[],
    //商品情報が入るリスト
    Toppings:[],
    //トッピング情報が入るリスト
    chooseitem:{},
    //選択した商品が入るリスト
    cartList:[],
    //注文確認画面を表示するリスト
    pickitem:{}
    //詳細からカートへ追加するリスト
  },
  mutations: {
    //商品情報
    fetchFood(state, Items){           
      state.Foods.push(Items)
    },
    //カートに追加
    addcart(state,{id,cartitem}){
    cartitem.id=id;
    state.cartList=cartitem;
    console.log(state.cartList)
    },
    // updateCart(state, { selectItem }) {
    //   state.useCart.Items.push(selectItem)
    //   console.log(state.useCart)
    //ユーザー情報保持
    setLoginUser(state,user){
    state.login_user=user
    console.log(state.login_user)
    },
    //ユーザー情報削除
    deleteLoginUser(state){
    state.login_user=null
    },
    //カート情報更新
    editcart(state,cartData1){
      state.cartList=cartData1
    }
  },
  actions: {
    //ログイン
    //firebaseとの通信
    login(){
      const google_auth_provider=new firebase.auth.GoogleAuthProvider()//authを追加
      firebase.auth().signInWithRedirect(google_auth_provider)
    },
    //ユーザー情報保持
    setLoginUser({commit},user){
      commit('setLoginUser',user)
    },
    //ログアウト
    //firebaseとの通信
    logout(){
    firebase.auth().signOut()
    },
    //ユーザー情報削除
    deleteLoginUser({commit}){
      commit('deleteLoginUser')
    },
    //商品情報の取得
    fetchFood({commit}){
    firebase.firestore().collection('Items/')
    .get()
      .then(querySnapshot=>{
        querySnapshot.forEach(doc=>{
            commit('fetchFood',doc.data())
        })
    }) 
  },
  //カートに追加
  incart({getters,commit}){
    console.log(getters.userid)
    firebase.firestore().collection(`Users/${getters.userid}/carts`)
    //cartsまでアクセス／cartsの中にIDを生成
    .add(
      {
        orderDate:"",
        userName:"",
        mailAddress:"",
        addreddNumber:"",
        adress:"",
        phoneNumber:"",
        deliverDate:"",
        deliveryTime:"",
        status:0,
        cartList:[],
        likeList:[]
      }
    )
    .then(doc=>
      {
      commit("addcart",{id:doc.id,cartitem:{
        orderDate:"",
        userName:"",
        mailAddress:"",
        addreddNumber:"",
        adress:"",
        phoneNumber:"",
        deliverDate:"",
        deliveryTime:"",
        status:0,
        //0=未購入
        //1=代金引換
        //2＝クレカ
        cartList:[],
        likeList:[]
      }
    })
    }
    )
  },
  //カート情報取得
  fetchcart({getters,commit}){
    // console.log(getters.userid)
    firebase.firestore()
    .collection(`Users/${getters.userid}/carts`)
    .get()
    .then(snapshot=>{
      // console.log(snapshot)
      if(snapshot.empty){
        this.dispatch("incart")
      }
      //snapahotはdocumentが複数入っているforEachで確認
      snapshot.forEach(doc=>{
        if(doc.data().status===0){
          commit("addcart",{cartitem:doc.data()})
        }
      })
    })
  },
  //カートの情報を更新する
  editcart({getters,commit},pickitem){
    if(getters.userid){
      console.log(getters.userid)
      let cartitem=this.state.cartList
      cartitem.cartList.push(pickitem)
      firebase
      .firestore()
      .collection(`Users/${getters.userid}/carts`)
      .doc(cartitem.id)
      .update(cartitem)
      // console.log(pickitem)
    }
    else {
      let cartData1 = {
        orderDate: "",
        userName: "",
        mailAddress: "",
        addressNumber: "",
        address: "",
        phoneNumber: "",
        deliveryDate: "",
        deliveryTime: "",
        status: 0,
        cartList: []
      }
      cartData1.cartList.push(pickitem)
      commit("editcart",cartData1)
    }
  }

  },
 getters: {
   userName:state=>state.login_user?state.login_user.displayName:'',
   photoURL:state=>state.login_user?state.login_user.photoURL:'',
   //商品一覧からIDを取得
   getfoodId: (state) => (id) => state.Foods[0].food.find( item=> item.id === id),
   //ログイン情報からユーザーIDを取得
   userid: state => state.login_user ? state.login_user.uid : null,
 }
})

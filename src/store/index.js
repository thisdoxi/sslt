import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList:[]
  },
  mutations: {
    addCart(state,payload){
      state.cartList.push(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})

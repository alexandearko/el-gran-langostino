import { createStore } from "vuex";

export default createStore({
  state: {
    products: []
  },
  getters: {
    getProducts: state => {
      return state.products
    },
    getProductsCount: state => {
      return state.products.length
    },
  },
  mutations: {
    addToCart(state, payload) {
      state.products.push(payload)
      console.log(state.products)
    }
  },
  actions: {},
  modules: {}
});

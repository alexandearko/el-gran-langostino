import { createStore } from "vuex";

export default createStore({
  state: {
    products: [],
  },
  getters: {
    getProducts: (state) => {
      return state.products;
    },
    getProductsCount: (state) => {
      return state.products.length;
    },
  },
  mutations: {
    addToCart(state, payload) {
      state.products.push(payload);
      console.log(state.products);
      this.commit("setInStorage");
    },
    deleteProduct(state, payload) {
      let pos;
      for (let index = 0; index < state.products.length; index++) {
        if (state.products[index].v4 == payload) {
          pos = index;
        }
      }
      state.products.splice(pos, 1);
      this.commit("setInStorage");
    },
    setInStorage(state) {
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    initialiseStore(state) {
      console.log(localStorage.getItem("products"));
      if (localStorage.getItem("products") != null) {
        var products = JSON.parse(localStorage.getItem("products"));
        state.products = products;
      }
    },
  },
  actions: {},
  modules: {},
});

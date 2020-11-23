import { createStore } from "vuex";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    allProducts: [],
    products: [],
    filter: false,
    productsFiltered: [],
    menuOption: "",
  },
  getters: {
    getMenuOption(state) {
      return state.menuOption;
    },
    getAllProducts(state) {
      return state.productsFiltered;
    },
    getProducts: (state) => {
      return state.products;
    },
    getProductsCount: (state) => {
      return state.products.length;
    },
  },
  mutations: {
    setAllProducts(state, payload) {
      var grill_meat = payload.data.categories.grill_meat.products;
      this.commit("reOrder", { product: grill_meat, category: "carne" });

      var hamburgers = payload.data.categories.hamburgers.products;
      this.commit("reOrder", { product: hamburgers, category: "hamburguesa" });

      var salads = payload.data.categories.salads.products;
      this.commit("reOrder", { product: salads, category: "ensalada" });

      var sodas = payload.data.categories.sodas.products;
      this.commit("reOrder", { product: sodas, category: "soda" });
    },
    reOrder(state, payload) {
      console.log(payload);
      for (let i = 0; i < payload.product.length; i++) {
        payload.product[i].category = payload.category;
        payload.product[i].uuid = uuidv4();
        state.allProducts.push(payload.product[i]);
      }
      console.log(state.allProducts);
    },
    filterBy(state, payload) {
      switch (payload) {
        case 0:
          state.productsFiltered = state.allProducts;
          this.commit("menuOption", "Todo");
          break;
        case 1:
          state.productsFiltered = state.allProducts.filter(
            (product) => product.category == "carne"
          );
          this.commit("menuOption", "Carnes");
          break;
        case 2:
          state.productsFiltered = state.allProducts.filter(
            (product) => product.category == "hamburguesa"
          );
          this.commit("menuOption", "Hamburguesas");
          break;
        case 3:
          state.productsFiltered = state.allProducts.filter(
            (product) => product.category == "ensalada"
          );
          this.commit("menuOption", "Ensaladas");
          break;
        case 4:
          state.productsFiltered = state.allProducts.filter(
            (product) => product.category == "soda"
          );
          this.commit("menuOption", "Sodas");
          break;

        default:
          break;
      }
    },
    filterByText(state, payload) {
      if (payload == "") {
        return;
      } else {
        payload = payload.toLowerCase();

        state.productsFiltered = state.productsFiltered.filter((product) => {
          return product.name.toLowerCase().indexOf(payload) > -1;
        });
      }
    },
    menuOption(state, payload) {
      state.menuOption = payload;
      console.log(state.menuOption);
    },
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
      if (localStorage.getItem("products") != null) {
        var products = JSON.parse(localStorage.getItem("products"));
        state.products = products;
      }
    },
  },
  actions: {
    async fetchProducts(context) {
      const res = await axios.get(
        "https://nelkir-frontend.s3.amazonaws.com/categories_product_food.json"
      );
      context.commit("setAllProducts", res);
    },
  },
  modules: {},
});

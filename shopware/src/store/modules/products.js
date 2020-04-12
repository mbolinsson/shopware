import axios from "@/helpers/axios";

export default {
  state: {
    product: null,
    products: [],
    currency: "kr"
  },

  mutations: {
    SET_STATE_PRODUCT(state, product) {
      state.product = product;
      sessionStorage.setItem("product", state.product);
    },
    SET_STATE_PRODUCTS(state, products) {
      state.products = products;
      sessionStorage.setItem("products", state.products);
    }
  },

  actions: {
    async getProduct({commit}, id) {
      let res = await axios.get("/products/" + id);

      if (res !== null) {
        commit("SET_STATE_PRODUCT", res.data);
      }
    },
    async getProducts({commit}) {
      let res = await axios.get("/products");

      if (res !== null) {
        commit("SET_STATE_PRODUCTS", res.data);
      }
    }
  },

  getters: {
    products(state) {
      return state.products;
    },
    product(state) {
      return state.product;
    }
  }
};

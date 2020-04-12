import axios from "@/helpers/axios";

export default {
  state: {
    userId: null,
    historicOrders: []
  },

  mutations: {
    POST_SIGNIN(state, formData) {
      axios.post("users/login", formData).then(res => {
        const token = res.data.token;
        console.log(token);

        state.userId = res.data.user._id;
        localStorage.setItem("userId", state.userId);
        localStorage.setItem("token", token);
      });
    },
    POST_REGISTER(state, formData) {
      console.log(formData);
      axios.post("users/register", formData).then(res => {
        console.log(res);
      });
    },
    GET_HISTORIC_ORDERS(state, historicOrders) {
      console.log(historicOrders);
      state.historicOrders = historicOrders;
    }
  },
  actions: {
    postSignIn({commit}, formData) {
      commit("POST_SIGNIN", formData);
    },
    postRegister({commit}, formData) {
      commit("POST_REGISTER", formData);
    },
    async getHistoricOrders({commit}) {
      const token = localStorage.getItem("token");
      await axios.get("users/orderhistory", {headers: {"x-access-token": token}}).then(res => {
        console.log(res.data);

        if (res !== null) {
          commit("GET_HISTORIC_ORDERS", res.data);
        }
      });
    }
  },
  getters: {
    historicOrders(state) {
      return state.historicOrders;
    }
  }
};

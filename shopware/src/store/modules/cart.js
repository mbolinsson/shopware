import axios from "@/helpers/axios";

export default {
  state: {
    cart: []
  },

  mutations: {
    ADD_TO_CART(state, {product, quantity}) {
      let exists = state.cart.find(item => {
        return item.product._id === product._id;
      });
      if (exists) {
        exists.quantity += quantity;
        return;
      }
      state.cart.push({product, quantity});
      sessionStorage.setItem("cart", state.cart);
    },
    DECREMENT_PRODUCT(state, cartItem) {
      let index = state.cart.findIndex(item => {
        return cartItem.product._id === item.product._id;
      });
      state.cart[index].quantity = cartItem.quantity;

      state.cart[index].quantity--;
      if (state.cart[index].quantity < 1) {
        state.cart.splice(index, 1);
      }

      sessionStorage.setItem("cart", state.cart);
    },
    INCREMENT_PRODUCT(state, cartItem) {
      let index = state.cart.findIndex(item => {
        return cartItem.product._id === item.product._id;
      });
      state.cart[index].quantity = cartItem.quantity;

      state.cart[index].quantity++;
      if (state.cart[index].quantity < 1) {
        state.cart.splice(index, 1);
      }

      sessionStorage.setItem("cart", state.cart);
    },

    DELETE_FROM_CART(state, id) {
      state.cart = state.cart.filter(item => {
        return item.product._id !== id;
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    BUY_PRODUCTS(state) {
      let order = [];
      let ordernumber = Date.now();
      let userId = window.localStorage.getItem("userId");
      let token = window.localStorage.getItem("token");
      state.cart.forEach(item => {
        order.push({
          name: item.product.name,
          quantity: item.quantity,
          ordernumber,
          userId,
          image: item.product.image
        });
      });
      console.log(order);

      axios
        .post("products/order", order, {
          headers: {
            "x-access-token": token
          }
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },

  actions: {
    addProductToCart({commit}, {product, quantity}) {
      commit("ADD_TO_CART", {product, quantity});
    },
    deleteProductFromCart({commit}, id) {
      commit("DELETE_FROM_CART", id);
    },
    decrementProduct({commit}, item, change) {
      commit("DECREMENT_PRODUCT", item, change);
    },
    incrementProduct({commit}, item, change) {
      commit("INCREMENT_PRODUCT", item, change);
    },
    async BuyProducts({commit}, userId) {
      console.log(userId);
      commit("BUY_PRODUCTS");
    }
  },

  getters: {
    shoppingCart(state) {
      return state.cart;
    },
    shoppingCartTotal(state) {
      let total = 0;
      if (state.cart.length !== 0) {
        state.cart.forEach(item => {
          total += item.product.price * item.quantity;
        });
      }
      return total;
    },
    shoppingCartItemCount(state) {
      let items = 0;
      state.cart.forEach(item => {
        items += item.quantity;
      });
      return items;
    }
  }
};

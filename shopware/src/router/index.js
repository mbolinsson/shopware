import Vue from "vue";
import VueRouter from "vue-router";
import Products from "../views/Products.vue";
import Product from "../views/Product.vue";
import Register from "../views/Register.vue";
import SignIn from "../views/SignIn.vue";
import History from "../views/History.vue";
import CheckOut from "../views/CheckOut.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Products",
    component: Products
  },
  {
    path: "/Product/:id",
    name: "Product",
    component: Product,
    props: true
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/History",
    name: "History",
    component: History
  },
  {
    path: "/CheckOut",
    name: "CheckOut",
    component: CheckOut
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

<template>
  <div class="d-flex justify-content-center">
    <!-- Default form login -->
    <form class="text-center p-5" action="#!" @submit.prevent="postSignIn(signIn)">
      <p class="h4 mb-4">Sign in</p>

      <!-- Email -->
      <input
        v-model="signIn.email"
        type="email"
        id="defaultLoginFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
      />
      <p>{{signIn.email}}</p>
      <!-- Password -->
      <input
        type="password"
        id="defaultLoginFormPassword"
        class="form-control mb-4"
        placeholder="Password"
        v-model="signIn.password"
      />
      <p>{{signIn.password}}</p>

      <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>
    </form>
    <!-- Default form login -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      signIn: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["postSignIn"])
  }
};
</script>

<style scooped>
</style>
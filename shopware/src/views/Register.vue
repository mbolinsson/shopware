<template>
  <div class="d-flex justify-content-center">
    <!-- Register -->
    <form class="text-center p-5" action="#!" @submit.prevent="postRegister(register)">
      <p class="h4 mb-4">Register</p>

      <!-- Name -->
      <input
        type="name"
        id="defaultRegisterFormName"
        class="form-control mb-4"
        placeholder="Name"
        v-model="register.name"
      />

      <!-- Email -->
      <input
        type="email"
        id="defaultRegisterFormEmail"
        class="form-control mb-4"
        placeholder="E-mail"
        v-model="register.email"
      />

      <!-- Password -->
      <input
        type="password"
        id="defaultRegisterFormPassword"
        class="form-control mb-4"
        placeholder="Password"
        v-model="register.password"
      />

      <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit">Register</button>
    </form>
    <!-- Default form login -->
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      register: {
        name: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    ...mapActions(["postRegister"])
  }
};
</script>

<style>
</style>
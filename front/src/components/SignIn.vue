<template>
  <div :class="['modal', showmodal ? 'is-active' : '']">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign in</p>
        <button
          class="delete"
          @click="$emit('close')"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body has-text-centered">
        <form class="signin" @submit.prevent="signin">
          <label>User name</label>
          <br />
          <input required v-model="username" type="text" />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input required v-model="password" type="password" />
          <br />
          <br />
          <button class="button is-primary" type="submit">Sign In</button>
        </form>
      </section>
      <p v-if="showError" id="error">Username or Password is incorrect</p>
    </div>
  </div>
</template>

<script>
import { SIGNIN_REQUEST } from "@/store/modules/auth.js";

export default {
  name: "SignIn",
  data() {
    return {
      username: null,
      password: null,
      showError: false,
    };
  },
  props: ["showmodal"],
  methods: {
    signin: function () {
      const { username, password } = this;
      this.$store.dispatch(SIGNIN_REQUEST, { username, password }).then(() => {
        this.$emit("close");
        this.$router.push("/");
      });
    },
  },
};
</script>

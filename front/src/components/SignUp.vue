<template>
  <div :class="['modal', showmodal ? 'is-active' : '']">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign up</p>
        <button
          class="delete"
          @click="$emit('close')"
          aria-label="close"
        ></button>
      </header>
      <section class="modal-card-body has-text-centered">
        <form class="signup" @submit.prevent="signup">
          <label>User name</label>
          <br />
          <input required v-model="username" type="text" />
          <br />
          <br />
          <label>Email</label>
          <br />
          <input required v-model="email" type="text" />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input required v-model="password" type="password" />
          <br />
          <br />
          <button class="button is-primary" type="submit">Sign up</button>
        </form>
      </section>
      <p v-if="showError" id="error">An error occured :</p>
    </div>
  </div>
</template>

<script>
import { SIGNUP_REQUEST } from "@/store/modules/auth.js";

export default {
  name: "SignUp",
  data() {
    return {
      username: null,
      email: null,
      password: null,
      showError: false,
    };
  },
  props: ["showmodal"],
  methods: {
    signup: function () {
      const { username, email, password } = this;
      this.$store
        .dispatch(SIGNUP_REQUEST, { username, email, password })
        .then(() => {
          this.$emit("close");
          this.$router.push("/");
        });
    },
  },
};
</script>

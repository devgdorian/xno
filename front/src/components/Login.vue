<template>
  <div :class="['modal', showmodal ? 'is-active' : '']">
    <div class="modal-background" @click="$emit('close')"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Sign in</p>
        <button class="delete" @click="$emit('close')" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        <form class="login" @submit.prevent="login">
          <label>User name</label>
          <br />
          <input required v-model="username" type="text" />
          <br />
          <br />
          <label>Password</label>
          <br />
          <input
            required
            v-model="password"
            type="password"
            placeholder="Password"
          />
          <br />
          <br />
          <button class="button is-primary" type="submit">Login</button>
        </form>
      </section>
      <p v-if="showError" id="error">Username or Password is incorrect</p>
    </div>
  </div>
</template>

<script>
import { AUTH_REQUEST } from "@/store/modules/auth.js";

export default {
  name: "Login",
  data() {
    return {
      username: null,
      password: null,
      showError: false
    }
  },
  props: ['showmodal'],
  methods: {
    login: function () {
      const { username, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
        this.$emit('close');
        this.$router.push("/");
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

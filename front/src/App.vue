<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/xno">Xno</router-link> |
    <button
      v-if="authState && authState.isAuthenticated"
      v-on:click="logout"
      id="logout-button"
    >
      Logout
    </button>
    <button v-else v-on:click="login" id="login-button">Login</button>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  methods: {
    async login() {
      await this.$auth.signInWithRedirect();
    },
    async logout() {
      await this.$auth.signOut();
    },
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

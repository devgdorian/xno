<template>
  <div id="nav">
    <router-link to="/">Xno logo</router-link> |
    <router-link to="/login">Login</router-link>
    <!-- <button
      v-if="authState && authState.isAuthenticated"
      v-on:click="logout"
      id="logout-button"
    >
      Logout
    </button>
    <button v-else v-on:click="login" id="login-button">Login</button> -->
  </div>
  <router-view />
</template>

<script lang="ts">
  export default {
    name: "app",
  };
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

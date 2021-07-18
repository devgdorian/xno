<template>
  <div id="xno">
    <Navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar,
  },
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

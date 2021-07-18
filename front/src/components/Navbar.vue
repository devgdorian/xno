<template>
  <div id="nav">
    <router-link to="/">Accueil</router-link> |
    <span v-if="isLoggedIn">
      <a @click="logout">Logout</a>
    </span>
    <span v-else>
      <Login />
    </span>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "Navbar",
  components: {
    Login,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logout() {
      await this.$store.dispatch("Logout");
      this.$router.push("/");
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

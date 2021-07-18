<template>
  <div id="nav">
    {{ status }}
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
import { mapGetters } from "vuex";
import { AUTH_LOGOUT } from "@/store/modules/auth.js";

export default {
  name: "Navbar",
  components: {
    Login,
  },
  computed: {
    ...mapGetters({ status: "authStatus" }),
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch(AUTH_LOGOUT).then(() => {
        this.$router.push("/");
      });
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

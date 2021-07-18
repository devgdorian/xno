<template>
  <div id="nav">
    <span id="logo">
      <router-link to="/">XNO</router-link>
    </span>
    <span id="action-bar" v-if="isLoggedIn">
      <a @click="account">Account</a>
      |
      <a @click="logout">Logout</a>
    </span>
    <span id="status">
      {{ status }}
    </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { AUTH_LOGOUT } from "@/store/modules/auth.js";

export default {
  name: "Navbar",
  components: {
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
  margin: -8px;
  padding: 20px;
  background-color: lightgrey;
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

#logo {
  padding-left: 5%;
  text-align:left;
}

#action-bar {
  padding-right: 5%;
  text-align: right;
}

#status {
  padding-right: 5%;
  text-align: right;
  font-style: italic;
  font-size: 90%;
}
</style>

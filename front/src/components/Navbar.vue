<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        <!-- <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"> -->
        XNO
      </router-link>
    </div>

    <div id="navbar" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item"></div>
        <div class="navbar-item" id="status">
          <span class="tag is-info">{{ status }}</span>
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item" v-if="isLoggedIn">
            <a @click="account">Account</a>
        </div>
        <div class="navbar-item" v-if="isLoggedIn">
            <a @click="logout">Log out</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { SIGNOFF_REQUEST } from "@/store/modules/auth.js";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters({ status: "authStatus" }),
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch(SIGNOFF_REQUEST).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>
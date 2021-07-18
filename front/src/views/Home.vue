<template>
  <div class="home">
    <h3>Accueil Xno</h3>
    <Login v-if="!isLoggedIn" />
    <Register v-if="!isLoggedIn" />
  </div>
</template>

<script>
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

export default {
  name: "Home",
  components: {
    Login,
    Register,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

<template>
  <div class="home">
    <h3>Accueil Xno</h3>
    <Register v-if="!isLoggedIn" />
  </div>
</template>

<script>
import Register from "@/components/Register.vue";

export default {
  name: "Home",
  components: {
    Register,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

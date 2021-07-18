<template>
  <div class="home">
    <p>Xeno logged in</p>
    {{ User }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Xno",
  computed: {
    ...mapGetters({User: "stateUser"}),
  },
};
</script>

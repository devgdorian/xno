<template>
  <div class="home">
    <p>Xeno logged in</p>
    {{ users }}
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Xno",
  data() {
    return {
      users: null,
    };
  },
  created() {
    this.GetUsers();
  },
  methods: {
    async GetUsers() {
      axios.get("test/get-users").then((res) => {
        this.users = res;
      });
    },
  },
};
</script>

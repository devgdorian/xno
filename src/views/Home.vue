<template>
  <div class="home">
    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/Test.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Test,
  },
  async created() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${this.$auth.getAccessToken()}`;
    try {
      const response = await axios.get(`http://localhost:8080/api/messages`);
      this.posts = response.data;
    } catch (e) {
      console.error(`Errors! ${e}`);
    }
  },
};
</script>

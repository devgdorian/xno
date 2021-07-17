<template>
  <div class="home">
    <Test />
    test
  </div>
</template>

<script>
// @ is an alias to /src
import Test from "@/components/Test.vue";

export default {
  name: "Home",
  components: {
    Test,
  },
};
</script>

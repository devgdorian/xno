<template>
  <div id="character">
    <section class="section">
      <h2>Character</h2>
      {{ character }}
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Character",
  data() {
    return {
      "character": null,
    }
  },
  created() {
    this.GetCurrentCharacter();
  },
  methods: {
    async GetCurrentCharacter() {
      axios.get("character/current/get").then((res) => {
        this.character = res.data;
      });
    },
  },
};
</script>

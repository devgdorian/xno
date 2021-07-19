<template>
  <div id="xno">
    <section class="section">
      <div class="columns has-text-centered">
        <div class="column">
          <Character />
        </div>
        <div class="column">
          <Ship />
        </div>
        <div class="column">
          <Xnocare />
        </div>
        <div class="column">
          <Map />
        </div>
        <div class="column is-offset-2">
          <Event />
        </div>
        <div class="column">
          <Clock />
        </div>
      </div>
    </section>
    {{ users }}
  </div>
</template>

<script>
import axios from "axios";
import Character from '@/components/xno/Character';
import Ship from '@/components/xno/Ship.vue';
import Xnocare from '@/components/xno/Xnocare.vue';
import Map from '@/components/xno/Map.vue';
import Event from '@/components/xno/Event.vue';
import Clock from "@/components/xno/Clock";

export default {
  name: "Xno",
  data() {
    return {
      users: null,
    };
  },
  components: {
    Character,
    Ship,
    Xnocare,
    Map,
    Event,
    Clock,
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

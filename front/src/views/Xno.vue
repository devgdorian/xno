<template>
  <div id="xno">
    <Actionbar @showcharacter="show(CHARACTER)" @showship="show(SHIP)" @showxnocare="show(XNOCARE)" @showmap="show(MAP)" />
    <Character v-if="modules[CHARACTER]" />
    <Ship v-if="modules[SHIP]" />
    <Xnocare v-if="modules[XNOCARE]" />
    <Map v-if="modules[MAP]" />
    {{ users }}
  </div>
</template>

<script>
import axios from "axios";
import Actionbar from "@/components/xno/Actionbar";
import Character from "@/components/xno/Character";
import Ship from "@/components/xno/Ship";
import Xnocare from "@/components/xno/Xnocare";
import Map from "@/components/xno/Map";

const CHARACTER = "character";
const SHIP = "ship";
const XNOCARE = "xnocare";
const MAP = "map";

export default {
  name: "Xno",
  data() {
    return {
      CHARACTER: [CHARACTER],
      SHIP: [SHIP],
      XNOCARE: [XNOCARE],
      MAP: [MAP],
      modules: {
        [CHARACTER]: false,
        [SHIP]: false,
        [XNOCARE]: false,
        [MAP]: false,
      },
      users: null,
    };
  },
  components: {
    Actionbar,
    Character,
    Ship,
    Xnocare,
    Map,
  },
  created() {
    this.GetUsers();
  },
  methods: {
    show(moduleToShow) {
      for (let module in this.modules) {
        this.modules[module] = false;
      }
      this.modules[moduleToShow] = true;
    },
    async GetUsers() {
      axios.get("test/get-users").then((res) => {
        this.users = res;
      });
    },
  },
};
</script>

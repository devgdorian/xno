<template>
  <section class="section">
    <div class="container has-text-centered">
      <div class="content">
        <h1 class="block">Welcome to Xno</h1>
        <div class="block" v-if="!isLoggedIn">
          <a href="#" @click="toggleShowSignIn">Sign in</a>
          or
          <a href="#" @click="toggleShowSignUp">Sign up</a>
        </div>
        <h3 class="block">Choose a species</h3>
        <div class="level pb-4">
          <div class="level-item">
            <div>
              <p class="heading">Nar</p>
              <p class="title"><span class="tag is-warning">Mora</span></p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">Hexovaara</p>
              <p class="title"><span class="tag is-black">Milvaar</span></p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">More to come</p>
              <p class="title"><span class="tag is-primary">Soon</span></p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">and more</p>
              <p class="title"><span class="tag is-primary">Coming</span></p>
            </div>
          </div>
        </div>
        <h3 class="block">Build your ship</h3>
        <div class="level pb-4">
          <div class="level-item">
            <div>
              <p class="heading">Engine room</p>
              <p class="title"><span class="tag is-primary">Fuel</span></p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">Lab tech</p>
              <p class="title"><span class="tag is-primary">Xno</span></p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">Cargo hold</p>
              <p class="title">
                <span class="tag is-primary">Ressources</span>
              </p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">Hab quarters</p>
              <p class="title"><span class="tag is-primary">Crew</span></p>
            </div>
          </div>
        </div>
        <h3 class="block">And start exploring the star system</h3>
        <div class="level pb-4">
          <div class="level-item">
            <div>
              <p class="heading">Planets</p>
              <p class="title">9</p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">Locations</p>
              <p class="title">27</p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">Events</p>
              <p class="title">81+</p>
            </div>
          </div>
          <div class="level-item">
            <div>
              <p class="heading">Market</p>
              <p class="title">418</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <SignIn
      :showmodal="showSignIn"
      @close="toggleShowSignIn"
      v-if="!isLoggedIn"
    />
    <SignUp
      :showmodal="showSignUp"
      @close="toggleShowSignUp"
      v-if="!isLoggedIn"
    />
  </section>
</template>

<script>
import SignIn from "@/components/SignIn.vue";
import SignUp from "@/components/SignUp.vue";

export default {
  name: "Home",
  data() {
    return {
      showSignIn: false,
      showSignUp: false,
    };
  },
  components: {
    SignIn,
    SignUp,
  },
  methods: {
    toggleShowSignIn() {
      this.showSignIn = !this.showSignIn;
    },
    toggleShowSignUp() {
      this.showSignUp = !this.showSignUp;
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isAuthenticated;
    },
  },
};
</script>

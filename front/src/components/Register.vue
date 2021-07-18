<template>
  <div>
    <form class="register" @submit.prevent="register">
      <h1>Register</h1>
      <label>User name</label>
      <input required v-model="username" type="text" placeholder="Snoopy" />
      <br />
      <br />
      <label>Email</label>
      <input required v-model="email" type="text" placeholder="Email" />
      <br />
      <br />
      <label>Password</label>
      <input
        required
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <br />
      <br />
      <button type="submit">Register</button>
    </form>
    <p v-if="showError" id="error">An error occured :</p>
    <ul v-if="showError">
      <li>
        {{ errors.Username }}
      </li>
      <li>
        {{ errors.Email }}
      </li>
      <li>
        {{ errors.Password }}
      </li>
    </ul>
  </div>
</template>

<script>
import { REGISTER_REQUEST } from "@/store/modules/auth.js";

export default {
  name: "Register",
  methods: {
    register: function () {
      const { username, email, password } = this;
      this.$store
        .dispatch(REGISTER_REQUEST, { username, email, password })
        .then(() => {
          this.$router.push("/");
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

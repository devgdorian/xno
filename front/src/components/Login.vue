<template>
  <div>
    <form class="login" @submit.prevent="submit">
      <h1>Sign in</h1>
      <label>User name</label>
      <input required v-model="form.username" type="text" placeholder="Snoopy" />
      <br />
      <br />
      <label>Password</label>
      <input
        required
        v-model="form.password"
        type="password"
        placeholder="Password"
      />
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
    <p v-if="showError" id="error">Username or Password is incorrect</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Login"]),
    async submit() {
      try {
          await this.Login(this.form);
          this.$router.push("/xno");
          this.showError = false
      } catch (error) {
        this.showError = true
      }
    },
  },
};

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://localhost:5001/api",
//   // headers: { 'Access-Control-Allow-Origin': '*' }
// });

// const myLoginRoutine = (user) =>
//   new Promise((resolve, reject) => {
//     instance({ url: "auth/login", data: user, method: "POST" })
//       .then((resp) => {
//         const token = resp.data.token;
//         localStorage.setItem("user-token", token); // store the token in localstorage
//         resolve(resp);
//       })
//       .catch((err) => {
//         localStorage.removeItem("user-token"); // if the request fails, remove any possible user token if possible
//         reject(err);
//       });
//   });

// export default {
//   name: "Login",
//   methods: {
//     login: function () {
//       const { username, password } = this;
//       myLoginRoutine({ username, password }).then(() => {
//         this.$router.push("/xno");
//       });
//     },
//   },
// };
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

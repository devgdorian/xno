<template>
  <div>
    <form class="register" @submit.prevent="submit">
      <h1>Register</h1>
      <label>User name</label>
      <input required v-model="form.username" type="text" placeholder="Snoopy" />
      <br />
      <br />
      <label>Email</label>
      <input required v-model="form.email" type="text" placeholder="Email" />
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
import { mapActions } from "vuex";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
      },
      errors: {
        Username: null,
        Email: null,
        Password: null
      },
      showError: false
    };
  },
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        await this.Register(this.form);
        this.$router.push("/login");
        this.showError = false
      } catch (res) {
        console.log(res);
        this.errors = res.errors
        this.showError = true
      }
    },
  },
};

// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://localhost:5001/api",
// });

// const myRegisterRoutine = (user) =>
//   new Promise((resolve, reject) => {
//     instance({ url: "auth/register", data: user, method: "POST" })
//       .then((resp) => {
//         console.log(resp);
//       })
//       .catch((err) => {
//         console.log(err);
//         reject(err);
//       });
//   });

// export default {
//   name: "Register",
//   methods: {
//     register: function () {
//       const { username, email, password } = this;
//       myRegisterRoutine({ username, email, password }).then(() => {
//         this.$router.push("/");
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

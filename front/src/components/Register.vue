<template>
 <div>
   <form class="register" @submit.prevent="register">
     <h1>Register</h1>
     <label>User name</label>
     <input required v-model="username" type="text" placeholder="Snoopy"/>
     <br/>
     <br/>
     <label>Email</label>
     <input required v-model="email" type="text" placeholder="Email"/>
     <br/>
     <br/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <br/>
     <br/>
     <button type="submit">Register</button>
   </form>
 </div>
</template>

<script>
  import axios from "axios";

  const instance = axios.create({
    baseURL: 'https://localhost:5001/api',
    // headers: { 'Access-Control-Allow-Origin': '*' }
  });

  const myRegisterRoutine = user => new Promise ((resolve, reject) => {
    instance({url: 'auth/register', data: user, method: 'POST' })
      .then(resp => {
        console.log(resp)
      })
    .catch(err => {
      console.log(err)
      reject(err)
    })
  });
  
  export default {
    name: "Register",
    methods: {
      register: function () {
        const { username, email, password } = this
        myRegisterRoutine({ username, email, password }).then(() => {
          this.$router.push('/')
        })
      }
    }
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

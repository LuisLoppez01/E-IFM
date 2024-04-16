<template>
  <div id="login-page">
    <div class="login-box">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <input v-model="loginForm.email" type="email" placeholder="Email" required>
        <input v-model="loginForm.password" type="password" placeholder="Password" required>
        <el-button :loading="loading" native-type="submit" type=" primary" style="width:100%;margin-bottom:30px;">Login</el-button>

      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: "Login.vue",
  data() {

    return {
      loginForm: {
        email: '',
        password: ''
      },
      loading: false,
    }
  },
  methods: {
    handleLogin() {
      this.$store.dispatch('login', { email: this.email, password: this.password })
        .then(() => {
          this.$router.push({ path: this.redirect || '/' })
          this.loading = false
        })
        .catch(error => {
          this.loading = false
          console.error('Error al iniciar sesión:', error);
        });
    }
  },
  mounted() {
    //console.log(this.$store.state);
  }
}
</script>

<style scoped>
#login-page {
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.login-box {
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
}

.login-box h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #7a7a7a;
}

.login-box input {
  border: 1px solid #ccc;
  border-radius: 4px;
  display: block;
  padding: 10px;
  width: 100%;
  margin-bottom: 10px;
}

.login-box button {
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  display: block;
  padding: 10px;
  width: 100%;
}

.login-box button:hover {
  background-color: #45a049;
}
</style>

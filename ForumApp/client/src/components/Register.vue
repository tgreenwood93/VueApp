
<template>
  <div>
    <h1>Register</h1>
    <input
     type="username"
     name="username"
     v-model="username"
     placeholder="username" />
    <br>
    <input
     type= "email"
     name= "email"
     v-model="email"
     placeholder="email" />
    <br>
    <input
     type="password"
     name="password"
     v-model="password"
     placeholder="password" />
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async register () {
      const responce = await AuthenticationService.register({
        username: this.username,
        email: this.email,
        password: this.password
      })
      console.log(responce.data)
    }
  }
}
</script>

<style scoped>

</style>

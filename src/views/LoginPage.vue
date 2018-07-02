<template>
  <div class='login'>
    <h1>Gahnit</h1>
    <form v-on:submit.prevent="login">

      <label for="username">Login</label>
      <input type="text" autofocus name="username" id="username" autocomplete="username" v-model="username" />

      <label for="password">Hasło</label>
      <input type="password" name="password" autocomplete="password" id="password" v-model="password" />

      <button v-bind:class="classObject" type="submit">Zaloguj</button>
    </form>
  </div>
</template>


<style scoped lang="stylus">
@import '../styles/variables.styl'

.login
  min-height: 100vh

.login, form
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

form
  color: dark
  background: white
  border-radius: 10px
  padding: 20px
</style>
<script>
  import gql from 'graphql-tag'
  import { USER_ID, AUTH_TOKEN  } from '../constants'

  const LOGIN_USER = gql `
    mutation LoginMutation($username: String!, $password: String!) {
      login(username: $username, password: $password) {
        token
        user{
          id
          username
        }
      }
    }
  `

  export default {
    data: () => ({
      username: '',
      password: ''
    }),

    // Attribute
    methods: {
      login() {
        const username = this.username
        const password = this.password

        // Mutation
        this.$apollo.mutate({
          mutation: LOGIN_USER,
          variables: {
            username,
            password
          },
        }).then((result) => {
          // Result
          console.log(result);
          const user = result.data.login.user.id
          const token = result.data.login.token
          this.saveUserData(user, token)
          this.$router.go({ path: '/' })
        }).catch((error) => {
          // Error
          alert(`Error from ${error}`)
          console.error(error)
        })
      },

      saveUserData (user, token) {
        localStorage.setItem(USER_ID, user)
        localStorage.setItem(AUTH_TOKEN, token)
        this.$root.$data.token = localStorage.getItem(USER_ID)
      }
    },

    computed: {
      canLogin: function () {
        return {
          disabled: !this.username && !this.password
        }
      },
      classObject: function(){
        return {
          dim: this.username && this.password
        }
      }
    }
  }
</script>

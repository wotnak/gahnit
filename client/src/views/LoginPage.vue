<template>
  <div class='login'>
    <h1>Gahnit</h1>
    <form @submit.prevent="login">

      <label for="username">Login</label>
      <input id="username" type="text" v-model="username" required autofocus />

      <label for="password">Hasło</label>
      <input id="password" type="password" v-model="password" required />

      <button>Zaloguj</button>
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

    methods: {
      login() {
        this.$apollo.mutate({
          mutation: LOGIN_USER,
          variables: {
            username: this.username,
            password: this.password
          },
        }).then((result) => {
          const user = result.data.login.user.id
          const token = result.data.login.token
          this.saveUserData(user, token)
          this.$router.go({ path: '/' })
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      },
      saveUserData (user, token) {
        localStorage.setItem(USER_ID, user)
        localStorage.setItem(AUTH_TOKEN, token)
        this.$root.$data.token = localStorage.getItem(USER_ID)
      }
    }
  }
</script>

<template>
  <div>
    <h1>Nowy użytkownik</h1>
    <form @submit.prevent="create">

      <label for="username">Login</label>
      <input id="username" v-model="username" placeholder="imienazwisko" type="text" required />
      <label for="displayName">Nazwa</label>
      <input id="displayName" v-model="displayName" placeholder="Imię Nazwisko" type="text" required />
      <label for="password">Hasło</label>
      <input id="password" v-model="password" placeholder="********" type="password" />

      <button>Dodaj</button>
    </form>
  </div>
</template>

<script>
  import gql from 'graphql-tag'
  const CREATE_USER = gql `
    mutation CreateUserMutation($username: String!, $displayName: String!, $password: String!) {
      createUser(username: $username, displayName: $displayName, password: $password) {
        id
      }
    }
  `

  export default {
    data: () => ({
      username: '',
      displayName: '',
      password: ''
    }),

    methods: {
      create() {
        this.$apollo.mutate({
          mutation: CREATE_USER,
          variables: {
            username: this.username,
            displayName: this.displayName,
            password: this.password
          },
        }).then((data) => {
          this.$router.push({ name: 'UserList'})
        }).catch((error) => {
          // Error
          alert(`Error from ${error}`)
          console.error(error)
        })
      },
    }
  }
</script>

<style>

</style>

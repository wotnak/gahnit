<template>
  <nav class="userMenu">
    <span>{{me.displayName}}</span>
    <button v-on:click="logout" class="logout">Wyloguj</button>
  </nav>
</template>

<script>
  import { USER_ID, AUTH_TOKEN  } from '../constants'
  import gql from 'graphql-tag'

  const ME_QUERY = gql `
    query DevicesQuery {
      me {
        displayName
      }
    }
  `

  export default {
    name: 'userMenu',
    data: () => ({
      me: {},
      loading: 0,
    }),
    // Apollo GraphQL
    apollo: {
      me: {
        query: ME_QUERY,
        loadingKey: 'loading',
        errorPolicy: 'all'
      },
    },
    methods: {
      logout () {
        localStorage.removeItem(USER_ID)
        localStorage.removeItem(AUTH_TOKEN)
        this.$root.$data.userId = localStorage.getItem(USER_ID)
        this.$root.$data.token = localStorage.getItem(AUTH_TOKEN)
        //this.$router.push({ path: '/' })
        this.$router.go(this.$router.currentRoute)
      }
    }
  }
</script>


<style scoped>
  .logout:hover {
    cursor: pointer;
  }
  .userMenu {
    margin-left: 10px;
  }
</style>

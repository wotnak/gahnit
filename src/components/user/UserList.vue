<template>
  <div>
    <template v-if="loading > 0">
      <Loader/>
    </template>

    <template v-else>
      <router-link :to="{ name: 'UserNew'}">Dodaj nowego</router-link>
      <h1>Użytkownicy</h1>
      <table>
        <tr>
          <th>Lp.</th>
          <th>Login</th>
          <th>Nazwa</th>
        </tr>

        <tr v-for="(user,index) in users" :key="user.id">
          <td class="index">{{index+1}}</td>
          <td><router-link :to="{ name: 'UserDetails', params: { id: user.id }}">{{ user.username }}</router-link></td>
          <td><router-link :to="{ name: 'UserDetails', params: { id: user.id }}">{{ user.displayName }}</router-link></td>
        </tr>

      </table>
    </template>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}
th, td {
  border: 1px solid black;
}
.index {
  width: 36px;
  text-align: center;
}

</style>

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'

  // GraphQL query
  const USERS_QUERY = gql `
    query UsersQuery {
      users {
        id
        username
        displayName
      }
    }
  `

  // Component def
  export default {
    components: { Loader },
    // Local state
    data: () => ({
      users: {},
      loading: 0,
    }),
    // Apollo GraphQL
    apollo: {
      users: {
        query: USERS_QUERY,
        loadingKey: 'loading',
        errorPolicy: 'all'
      },
    }
  }
</script>

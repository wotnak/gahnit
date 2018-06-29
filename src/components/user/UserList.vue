<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>

    <template v-else>
      <router-link :to="{ name: 'UserNew'}">Dodaj nowego</router-link>
      <h1>Użytkownicy</h1>

      <VueGoodTable
        :columns="columns"
        :rows="users"
        :lineNumbers="true"
        @on-row-click="onRowClick"
      />

    </template>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  import Loader from '@/components/Loader'
  import { VueGoodTable } from 'vue-good-table'
  import 'vue-good-table/dist/vue-good-table.css'

  const USERS_QUERY = gql `
    query UsersQuery {
      users {
        id
        username
        displayName
      }
    }
  `

  export default {
    components: { Loader, VueGoodTable },
    data: () => ({
      columns: [
        { label: 'Login', field: 'username'},
        { label: 'Nazwa', field: 'displayName'}
      ],
      users: {}
    }),

    methods: {
      onRowClick({ row }) {
        this.$router.push({ name: 'UserDetails', params: { id: row.id }})
      }
    },

    // data query
    apollo: {
      users: {
        query: USERS_QUERY
      }
    }
  }
</script>

<template>
<div>
  <template v-if="loading > 0">
    <Loader/>
  </template>

  <template v-else>
    <router-link :to="{ name: 'CustomerNew'}">Dodaj nowego</router-link>
    <h1>Klienci</h1>
    <table>
      <tr>
        <th>Lp.</th>
        <th>Nazwa</th>
      </tr>

      <tr v-for="(customer, index) in customers" :key="customer.id">
        <td>{{index+1}}</td>
        <td><router-link :to="{ name: 'CustomerDetails', params: { id: customer.id }}">{{ customer.name }}</router-link></td>
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

</style>

<script>
  import gql from 'graphql-tag'

  import Loader from '@/components/Loader'

  // GraphQL query
  const CUSTOMERS_QUERY = gql `
    query customers {
      customers {
        id
        name
      }
    }
  `

  // Component def
  export default {
    components: { Loader },
    // Local state
    data: () => ({
      customers: {},
      loading: 0,
    }),
    // Apollo GraphQL
    apollo: {
      customers: {
        query: CUSTOMERS_QUERY,
        loadingKey: 'loading',
      },
    }
  }
</script>

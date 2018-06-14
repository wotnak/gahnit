<template>
  <div>
    <template v-if="loading > 0">
      <Loader/>
    </template>

    <template v-else>
      <router-link :to="{ name: 'DeviceTypeNew'}">Dodaj nowy</router-link>
      <h1>Typy urządzeń</h1>
      <table>
        <tr>
          <th>Lp.</th>
          <th>Nazwa</th>
          <th>Pełna nazwa</th>
          <th>Konserwacja</th>
        </tr>

        <tr v-for="(type, index) in deviceTypes" :key="type.id">
          <td>{{index+1}}</td>
          <td><router-link :to="{ name: 'DeviceTypeDetails', params: { id: type.id }}">{{ type.preferedName ? type.preferedName : "" }}</router-link></td>
          <td><router-link :to="{ name: 'DeviceTypeDetails', params: { id: type.id }}">{{ type.name }}</router-link></td>
          <td>co {{type.conservationEveryNDays}} dni</td>
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

td>a{
  display: block;
}

tr:hover {
  background: grey;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'

  // GraphQL query
  const DEVICE_TYPES_QUERY = gql `
    query DeviceTypesQuery {
      deviceTypes {
        id
        name
        preferedName
        conservationEveryNDays
      }
    }
  `

  // Component def
  export default {
    components: { Loader },
    // Local state
    data: () => ({
      deviceTypes: {},
      loading: 0,
    }),
    // Apollo GraphQL
    apollo: {
      deviceTypes: {
        query: DEVICE_TYPES_QUERY,
        loadingKey: 'loading',
        errorPolicy: 'all'
      },
    }
  }
</script>

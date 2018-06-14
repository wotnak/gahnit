<template>
<div>
  <template v-if="loading > 0">
    <Loader/>
  </template>

  <template v-else>
    <h1>Urządzenia</h1>
    <table>
      <tr>
        <th>Id</th>
        <th>Właściciel</th>
        <th>Typ</th>
      </tr>

      <tr v-for="device in devices" :key="device.id">
        <td><router-link :to="{ name: 'DeviceDetails', params: { id: device.id }}">{{ device.id }}</router-link></td>
        <td><router-link :to="{ name: 'CustomerDetails', params: { id: device.owner.id }}">{{ device.owner.name }}</router-link></td>
        <td>{{device.type.name}}</td>
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
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'

  // GraphQL query
  const DEVICES_QUERY = gql `
    query DevicesQuery {
      devices {
        id
        type {
          name
        }
        owner {
          id
          name
        }
      }
    }
  `

  // Component def
  export default {
    components: { Loader },
    // Local state
    data: () => ({
      devices: {},
      loading: 0,
    }),
    // Apollo GraphQL
    apollo: {
      devices: {
        query: DEVICES_QUERY,
        loadingKey: 'loading',
        errorPolicy: 'all'
      },
    }
  }
</script>

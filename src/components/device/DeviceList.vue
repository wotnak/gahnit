<template>
<div>
  <template v-if="loading > 0">
    <Loader/>
  </template>

  <template v-else>
    <router-link :to="{ name: 'DeviceNew'}">Dodaj nowe</router-link>
    <h1>Urządzenia</h1>
    <table>
      <tr>
        <th>Lp.</th>
        <th>Id</th>
        <th>Właściciel</th>
        <th>Typ</th>
      </tr>

      <tr v-for="(device, index) in devices" :key="device.id">
        <td>{{index+1}}</td>
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
          id
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

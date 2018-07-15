<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <h1>Urządzenia typu {{ deviceType.preferedName ? deviceType.preferedName : deviceType.name }}</h1>
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

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'

  // GraphQL query
  const DEVICES_QUERY = gql `
    query DevicesQuery($type: ID!) {
      devices(type: $type) {
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
  const TYPE_QUERY = gql `
    query TypeQuery($id: ID!) {
      deviceType(id: $id) {
        id
        name
        preferedName
      }
    }
  `

  export default {
    components: { Loader },
    data: () => ({
      devices: {},
      deviceType: {}
    }),

    // query data
    apollo: {
      devices: {
        query: DEVICES_QUERY,
        variables() {
          return {type: this.$route.params.id}
        }
      },
      deviceType: {
        query: TYPE_QUERY,
        variables() {
          return {id: this.$route.params.id}
        }
      }
    }
  }
</script>

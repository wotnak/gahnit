<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <router-link :to="{ name: 'DeviceNew'}">Dodaj nowe</router-link>
    <h1>Urządzenia</h1>

    <VueGoodTable
      :columns="columns"
      :rows="devices"
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

  const DEVICES_QUERY = gql `
    query DevicesQuery {
      devices {
        id
        type {
          id
          preferedName
          name
        }
        owner {
          id
          name
        }
      }
    }
  `

  export default {
    components: { Loader, VueGoodTable },
    data: () => ({
      columns: [
        { label: 'Id', field: 'id' },
        { label: 'Właściciel', field: 'owner.name' },
        { label: 'Typ', field: 'type', formatFn: (type) => { return type.preferedName ? type.preferedName : type.name } }
      ],
      devices: {}
    }),

    methods: {
      onRowClick({ row }) {
        this.$router.push({ name: 'DeviceDetails', params: { id: row.id }})
      }
    },

    // query data
    apollo: {
      devices: {
        query: DEVICES_QUERY
      }
    }
  }
</script>

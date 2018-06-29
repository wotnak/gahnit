<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>

    <template v-else>
      <router-link :to="{ name: 'DeviceTypeNew'}">Dodaj nowy</router-link>
      <h1>Typy urządzeń</h1>

      <VueGoodTable
        :columns="columns"
        :rows="deviceTypes"
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

  export default {
    components: { Loader, VueGoodTable },
    data: () => ({
      columns: [
        { label: 'Nazwa', field: 'preferedName'},
        { label: 'Pełna nazwa', field: 'name'},
        { label: 'Konserwacja', field: 'conservationEveryNDays', type: 'number', formatFn: (days) => { return `co ${days} dni` } }
      ],
      deviceTypes: {}
    }),

    methods: {
      onRowClick({ row }) {
        this.$router.push({ name: 'DeviceTypeDetails', params: { id: row.id }})
      }
    },

    // query data
    apollo: {
      deviceTypes: {
        query: DEVICE_TYPES_QUERY
      }
    }
  }
</script>

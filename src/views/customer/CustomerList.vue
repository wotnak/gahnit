<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <h1>Klienci</h1>

    <VueGoodTable
      :columns="columns"
      :rows="customers"
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

  const CUSTOMERS_QUERY = gql `
    query customers {
      customers {
        id
        name
      }
    }
  `

  export default {
    components: { Loader, VueGoodTable },
    data: () => ({
      columns: [
        { label: 'Nazwa', field: 'name'}
      ],
      customers: {},
    }),

    methods: {
      onRowClick({ row }) {

        this.$router.push({ name: 'CustomerDetails', params: { id: row.id }})
      }
    },

    // query data
    apollo: {
      customers: {
        query: CUSTOMERS_QUERY
      }
    }
  }
</script>

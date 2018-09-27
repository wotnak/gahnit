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
      :pagination-options="{
        enabled: true,
        mode: 'records',
        perPage: 25,
        position: 'bottom',
        perPageDropdown: [25, 50, 100],
        dropdownAllowAll: false,
        nextLabel: 'następna',
        prevLabel: 'poprzednia',
        rowsPerPageLabel: 'Wiersze na stronę',
        ofLabel: 'z',
        pageLabel: 'strona'
      }"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        placeholder: 'Szukaj (wpisz szukaną frazę i wciśnij enter aby wyszukać)',
      }"
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
        symbol
      }
    }
  `

  export default {
    components: { Loader, VueGoodTable },
    data: () => ({
      columns: [
        { label: 'Symbol', field: 'symbol'},
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

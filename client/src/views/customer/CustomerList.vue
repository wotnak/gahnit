<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <h1>Klienci</h1>

<div class="sync">
  <button v-if="syncing" class="syncing" disabled>Synchronizacja z subiektem...</button>
  <button v-else @click="syncWithSubiekt()">Synchronizuj z subiektem</button>
</div>
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
<style lang="stylus" scoped>
.sync
  position: absolute
  right: 10px
  top: 50px
  .syncing
    cursor: wait
</style>
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

  const SYNC_WITH_SUBIEKT_MUTATION = gql`
    mutation syncWithSubiekt {
      syncWithSubiekt
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
      syncing: false
    }),

    methods: {
      onRowClick({ row }) {
        this.$router.push({ name: 'CustomerDetails', params: { id: row.id }})
      },
      syncWithSubiekt() {
        this.syncing = true
        this.$apollo.mutate({
          mutation: SYNC_WITH_SUBIEKT_MUTATION
        }).then(()=>{
          this.syncing = false
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
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

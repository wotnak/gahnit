<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <h1>Klienci</h1>

    <router-link v-if="parseInt($route.params.page) > 2" :to="`/customers/` + (parseInt($route.params.page) - 1)" tag="button" >Poprzednia strona</router-link>
    <router-link v-else-if="parseInt($route.params.page) === 2" to="/customers" tag="button" >Poprzednia strona</router-link>
    <router-link :to="`/customers/` + ($route.params.page !== undefined ? parseInt($route.params.page) + 1 : 2)" tag="button" >Następna strona</router-link>

<!--
<div class="sync">
  <button v-if="syncing" class="syncing" disabled>Synchronizacja z subiektem...</button>
  <button v-else @click="syncWithSubiekt()">Synchronizuj z subiektem</button>
</div>
-->
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
    query customers($offset: Int!, $limit: Int!) {
      customers(offset: $offset, limit: $limit) {
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
      syncing: false,
      perPage: 25,
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
        query: CUSTOMERS_QUERY,
        variables() {
          const currentPage = this.$route.params.page !== undefined ? this.$route.params.page : 1
          return {
            offset: this.perPage * (currentPage - 1),
            limit: this.perPage
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
.sync
  position: absolute
  right: 10px
  top: 50px
  .syncing
    cursor: wait
</style>
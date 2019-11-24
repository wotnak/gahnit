<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <router-link :to="{ name: 'DeviceNew'}" tag="button">Dodaj nowe</router-link>
    <h1>Urządzenia</h1>

    <router-link v-if="parseInt($route.params.page) > 2" :to="`/devices/` + (parseInt($route.params.page) - 1)" tag="button" >Poprzednia strona</router-link>
    <router-link v-else-if="parseInt($route.params.page) === 2" to="/devices" tag="button" >Poprzednia strona</router-link>
    <router-link :to="`/devices/` + ($route.params.page !== undefined ? parseInt($route.params.page) + 1 : 2)" tag="button" >Następna strona</router-link>

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

  import moment from 'moment'
  import pl from 'moment/locale/pl'
  moment.locale('pl')

  const DEVICES_QUERY = gql `
    query DevicesQuery($limit: Int!, $offset: Int!) {
      devices(limit: $limit, offset: $offset) {
        id
        UDTNumber
        serialNumber
        registrationNumber
        type {
          id
          preferedName
          name
        }
        owner {
          id
          name
        }
        nextUDT
        nextConservation
      }
    }
  `

  const formatNextActionDate = (date) => {
    if (date === null) {
      return 'brak danych'
    } else {
      const nextDate = moment(date)
      const today = moment()
      return today.to(nextDate)
    }
  }

  export default {
    components: { Loader, VueGoodTable },
    data: () => ({
      columns: [
        { label: 'Numer UDT', field: 'UDTNumber' },
        { label: 'Numer seryjny', field: 'serialNumber' },
        { label: 'Rejestracja', field: 'registrationNumber' },
        { label: 'Właściciel', field: 'owner.name' },
        { label: 'Rodzaj', field: 'type', formatFn: (type) => { return type.preferedName ? type.preferedName : type.name } },
        { label: 'Konserwacja', field: 'nextConservation', type: 'date', formatFn: formatNextActionDate },
        { label: 'UDT', field: 'nextUDT', type: 'date', formatFn: formatNextActionDate }
      ],
      devices: [],
      perPage: 25,
    }),

    methods: {
      onRowClick({ row }) {
        this.$router.push({ name: 'DeviceDetails', params: { id: row.id }})
      }
    },

    // query data
    apollo: {
      devices: {
        query: DEVICES_QUERY,
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

<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <router-link :to="{ name: 'DeviceNew'}" tag="button">Dodaj nowe</router-link>
    <router-link :to="{ name: 'DeviceNewWithActions'}" tag="button">Dodaj nowe z akcjami</router-link>
    <h1>Urządzenia</h1>

    <VueGoodTable
      :columns="columns"
      :rows="devices"
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

  import moment from 'moment'
  import pl from 'moment/locale/pl'
  moment.locale('pl')

  const DEVICES_QUERY = gql `
    query DevicesQuery {
      devices {
        id
        UDTNumber
        serialNumber
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

  export default {
    components: { Loader, VueGoodTable },
    data: () => ({
      columns: [
        { label: 'Numer UDT', field: 'UDTNumber' },
        { label: 'Numer seryjny', field: 'serialNumber' },
        { label: 'Właściciel', field: 'owner.name' },
        { label: 'Rodzaj', field: 'type', formatFn: (type) => { return type.preferedName ? type.preferedName : type.name } },
        { label: 'Konserwacja', field: 'nextConservation', type: 'date', formatFn: (date) => { return moment().to(moment(date)) } },
        { label: 'UDT', field: 'nextUDT', type: 'date', formatFn: (date) => { return moment().to(moment(date)) } }
      ],
      devices: []
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

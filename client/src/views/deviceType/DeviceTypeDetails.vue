<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <h1>Urządzenia rodzaju {{ deviceType.preferedName ? deviceType.preferedName : deviceType.name }}</h1>
    <!-- <VueGoodTable
      :columns="columns"
      :rows="devices"
      :lineNumbers="true"
      @on-row-click="onRowClick"
    /> -->
  </template>
</div>
</template>

<script>
  import gql from 'graphql-tag'

  import Loader from '/src/components/Loader.vue'

  import dayjs from 'dayjs'

  // GraphQL query
  const DEVICES_QUERY = gql `
    query DevicesQuery($type: ID!) {
      devices(type: $type) {
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
      deviceType: {},
      columns: [
        { label: 'Numer UDT', field: 'UDTNumber' },
        { label: 'Numer seryjny', field: 'serialNumber' },
        { label: 'Właściciel', field: 'owner.name' },
        { label: 'Rodzaj', field: 'type', formatFn: (type) => { return type.preferedName ? type.preferedName : type.name } },
        { label: 'Konserwacja', field: 'nextConservation', type: 'date', formatFn: (date) => { return dayjs().to(dayjs(date)) } },
        { label: 'UDT', field: 'nextUDT', type: 'date', formatFn: (date) => { return dayjs().to(dayjs(date)) } }
      ],
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

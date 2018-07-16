<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <h1>{{customer.name}}</h1>
    <ul>
      <li>nip: {{customer.nip}}</li>
      <li>adres:
          <ul>
            <li>kraj: {{customer.address.country}}</li>
            <li>miejscowość: {{customer.address.city}}</li>
            <li>ulica: {{customer.address.street}}</li>
            <li>budynek: {{customer.address.building}}</li>
            <li>kod pocztowy: {{customer.address.postCode}}</li>
            <li>poczta: {{customer.address.postDepartment}}</li>
          </ul>
      </li>
    </ul>
    <h4>Urządzenia</h4>
    <VueGoodTable
      :columns="columns"
      :rows="customer.devices"
      :lineNumbers="true"
      @on-row-click="onRowClick"
    />
  </template>
</div>
</template>
<script>
  import Loader from '@/components/Loader'
  import { VueGoodTable } from 'vue-good-table'
  import 'vue-good-table/dist/vue-good-table.css'

  import moment from 'moment'
  import pl from 'moment/locale/pl'
  moment.locale('pl')

  import gql from 'graphql-tag'

  const CUSTOMER_QUERY = gql`
    query CustomerQuery($id: ID!) {
      customer(id: $id) {
        id
        name
        nip
        address {
          country
          city
          street
          building
          postCode
          postDepartment
        }
        devices {
          id
          UDTNumber
          registrationNumber
          producentNumber
          nextUDT
          nextConservation
        }
      }
    }
  `
   const DELETE_MUTATION = gql`
      mutation deleteCustomer($id: ID!) {
        deleteCustomer(id: $id) {
          id
        }
      }
    `
  export default {
    components: { Loader, VueGoodTable },
    data() {
      return {
        columns: [
          { label: 'Numer UDT', field: 'UDTNumber'},
          { label: 'Numer rejestracyjny', field: 'registrationNumber'},
          { label: 'Typ', field: 'producentNumber'},
          { label: 'Konserwacja', field: 'nextConservation', type: 'date', formatFn: (date) => { return moment().to(moment(date)) } },
          { label: 'UDT', field: 'nextUDT', type: 'date', formatFn: (date) => { return moment().to(moment(date)) } }
        ],
        customer: {},
        id: this.$route.params.id
      }
    },

    apollo: {
      customer: {
        query: CUSTOMER_QUERY,
        variables() {
          return {id: this.id}
        }
      },
    },

    methods: {
      getTerm(date) {
        return moment.now().to(moment(date))
      },
      onRowClick({ row }) {
        this.$router.push({ name: 'DeviceDetails', params: { id: row.id }})
      },
      deleteCustomer(id) {
        this.$apollo.mutate({
          mutation: DELETE_MUTATION,
          variables: { id },
        }).then((data) => {
          this.$router.push({ path: '/customers' })
        }).catch((error) => {
          console.error(error)
          alert(error)
        })
      },
    },
  }
</script>

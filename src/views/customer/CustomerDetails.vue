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
    <ul>
      <li v-for="device in customer.devices" :key="device.id">
        <router-link :to="{ name: 'DeviceDetails', params: { id: device.id }}">{{ device.id }}</router-link>
      </li>
    </ul>
  </template>
</div>
</template>
<script>
  import Loader from '@/components/Loader'
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
    components: { Loader },
    data() {
      return {
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

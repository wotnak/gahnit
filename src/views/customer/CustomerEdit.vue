<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>

    <template v-else>
      <h1>Edytuj dane klienta</h1>
      <h4>Informacje</h4>
      <form v-on:submit.prevent="update">
        <input v-model="newCustomer.name" placeholder="Nazwa" required />
        <input v-model="newCustomer.nip" placeholder="NIP" required />

        <h4>Adres</h4>
        <input v-model="newCustomer.address.country" placeholder="Kraj" required />
        <input v-model="newCustomer.address.city" placeholder="Miejscowość" required />
        <input v-model="newCustomer.address.street" placeholder="Ulica" />
        <input v-model="newCustomer.address.building" placeholder="Budynek" required />
        <input v-model="newCustomer.address.postCode" placeholder="Kod pocztowy" required />
        <input v-model="newCustomer.address.postDepartment" placeholder="Poczta" />

        <button v-bind:class="classObject" type="submit">Zapisz</button>
      </form>
    </template>
  </div>
</template>

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'

  const UPDATE_CUSTOMER = gql `
    mutation UpdateCustomerMutation($id: ID!, $name: String!, $nip: String!, $address: AddressUpdateDataInput!) {
      updateCustomer(id: $id, name: $name, nip: $nip, address: $address) {
        id
      }
    }
  `
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
      }
    }
  `

  export default {
    components: { Loader },
    data: () => ({
      customer: {},
      newCustomer: { address: {} }
    }),

    apollo: {
      customer: {
        query: CUSTOMER_QUERY,
        variables() {
          return {id: this.$route.params.id}
        },
        update({ customer }) {
          this.newCustomer = JSON.parse(JSON.stringify(customer))
        },
      },
    },

    methods: {
      update() {
        const variables = {
          id: this.$route.params.id,
          name: this.newCustomer.name,
          nip: this.newCustomer.nip,
          address: this.newCustomer.address
        }
        delete variables.address.__typename

        this.$apollo.mutate({
          mutation: UPDATE_CUSTOMER,
          variables
        }).then((data) => {
          this.$router.push({ path: `/customer/${variables.id}`})
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      },
    },

    computed: {
      classObject: function(){
        return {
          dim:  this.newCustomer.name && this.newCustomer.nip
                && this.newCustomer.address.country
                && this.newCustomer.address.city
                && this.newCustomer.address.building
                && this.newCustomer.address.postCode
        }
      }
    }
  }
</script>

<style>

</style>

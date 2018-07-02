<template>
<div>
  <h1>Nowy klient</h1>
  <h4>Informacje</h4>
  <form @submit.prevent="create">
    <input
      auto-focus
      v-model="customer.name"
      placeholder="Nazwa"
      type="text"
      required
    />
    <input
      v-model="customer.nip"
      placeholder="NIP"
      type="text"
      required
    />
    <h4>Adres</h4>
    <input v-model="customer.address.country" placeholder="Kraj" type="text" required />
    <input v-model="customer.address.city" placeholder="Miejscowość" type="text" required />
    <input v-model="customer.address.street" placeholder="Ulica" type="text" />
    <input v-model="customer.address.building" placeholder="Budynek" type="text" required />
    <input v-model="customer.address.postCode" placeholder="Kod pocztowy" type="text" required />
    <input v-model="customer.address.postDepartment" placeholder="Poczta" type="text" />

    <button>Dodaj</button>
  </form>
</div>
</template>

<script>
  import gql from 'graphql-tag'
  const CREATE_CUSTOMER = gql `
    mutation CreateCustomerMutation($name: String!, $nip: String!, $address: AddressCreateInput!) {
      createCustomer(name: $name, nip: $nip, address: $address) {
        id
      }
    }
  `

  export default {
    data: () => ({
      customer: { address: {} }
    }),

    methods: {
      create() {
        this.$apollo.mutate({
          mutation: CREATE_CUSTOMER,
          variables: {
            name: this.customer.name,
            nip: this.customer.nip,
            address: this.customer.address
          },
        }).then((data) => {
          this.$router.push({ path: `/customers`})
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      }
    }
  }
</script>

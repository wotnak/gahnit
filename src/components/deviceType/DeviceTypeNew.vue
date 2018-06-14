<template>
<div>
  <h1>Nowy klient</h1>
  <h4>Informacje</h4>
  <form v-on:submit.prevent="create">
    <input
      auto-focus
      v-model="name"
      placeholder="Nazwa"
      type="text"
      value={name}
      required
    />
    <input
      v-model="nip"
      placeholder="NIP"
      type="text"
      value={nip}
      required
    />
    <h4>Adres</h4>
    <input v-model="address.country" placeholder="Kraj" type="text" value={address.country} required />
    <input v-model="address.city" placeholder="Miejscowość" type="text" value={address.city} required />
    <input v-model="address.street" placeholder="Ulica" type="text" value={address.street} />
    <input v-model="address.building" placeholder="Budynek" type="text" value={address.building} required />
    <input v-model="address.postCode" placeholder="Kod pocztowy" type="text" value={address.postCode} required />
    <input v-model="address.postDepartment" placeholder="Poczta" type="text" value={address.postDepartment} />

    <button v-bind:class="classObject" type="submit">Dodaj</button>
  </form>
</div>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  form>input {
    max-width: 500px;
    margin-bottom: 3px;
  }
  button {
    margin-top: 10px;
    max-width: 100px;
  }
  h4 {
    margin: 0
  }
</style>

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
      name: '',
      nip: '',
      // address
      address: {
        country: '',
        city: '',
        street: '',
        building: '',
        postCode: '',
        postDepartment: '',
      }

    }),

    // Attribute
    methods: {
      create() {
        const name = this.name
        const nip = this.nip
        const address = this.address

        this.name = ''
        this.nip = ''
        this.address = {
          country: '',
          city: '',
          street: '',
          building: '',
          postCode: '',
          postDepartment: '',
        }

        // Mutation
        this.$apollo.mutate({
          mutation: CREATE_CUSTOMER,
          variables: {
            name,
            nip,
            address
          },
        }).then((data) => {
          this.$router.push({ path: `/customers`})
        }).catch((error) => {
          // Error
          alert(`Error from ${error}`)
          console.error(error)
        })
      },
    },

    computed: {
      canPost: function () {
        return {
          disabled: !this.text && !this.name
                    && !this.address.country
                    && !this.address.city
                    && !this.address.building
                    && !this.address.postCode
        }
      },
      classObject: function(){
        return {
          dim:  this.text && this.name
                && this.address.country
                && this.address.city
                && this.address.building
                && this.address.postCode
        }
      }
    }
  }
</script>

<style>

</style>

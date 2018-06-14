<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>
    <template v-else>
      <h1>Nowe urządzenie</h1>
      <h4>Informacje</h4>
      <form v-on:submit.prevent="create">
        <label for="serialNumber">Numer seryjny</label>
        <input id="serialNumber" auto-focus v-model="serialNumber" placeholder="Numer seryjny" type="text" required />

        <label for="UDTNumber">Numer UDT</label>
        <input id="UDTNumber" v-model="UDTNumber" placeholder="Numer UDT" type="text" required />

        <label for="productionYear">Rok produkcji</label>
        <input id="productionYear" v-model="productionYear" placeholder="Rok produkcji" type="text" required />

        <label for="producent">Producent</label>
        <input id="producent" v-model="producent" placeholder="Producent" type="text" required />

        <label for="type">Typ</label>
        <select id="type" v-model="type" required>
          <option v-for="deviceType in deviceTypes" :key="deviceType.id" :value="deviceType.id">{{deviceType.preferedName ? deviceType.preferedName : deviceType.name}}</option>
        </select>

        <label for="owner">Właściciel</label>
        <select id="owner" v-model="owner" required>
          <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{customer.name}}</option>
        </select>

        <button v-bind:class="classObject" type="submit">Dodaj</button>
      </form>
    </template>
  </div>
</template>

<style scoped>
  form {
    display: flex;
    flex-direction: column;
  }
  form>input, form>select, option {
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
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'
  const CREATE_DEVICE = gql `
    mutation CreateDeviceMutation($serialNumber: String!, $UDTNumber: String!, $productionYear: String!, $producent: String!, $type: ID!, $owner: ID) {
      createDevice(serialNumber: $serialNumber, UDTNumber: $UDTNumber, productionYear: $productionYear, producent: $producent, type: $type, owner: $owner) {
        id
      }
    }
  `

  const TYPES_QUERY = gql`
    query DeviceTypesQuery {
      deviceTypes {
        id
        name
        preferedName
      }
    }
  `
  const CUSTOMERS_QUERY = gql`
    query CustomersQuery {
      customers {
        id
        name
      }
    }
  `

  export default {
    components: { Loader },
    data: () => ({
      serialNumber: '',
      UDTNumber: '',
      productionYear: '',
      producent: '',
      type: '',
      owner: '',
      deviceTypes: {},
      customers: {}
    }),

    apollo: {
      deviceTypes: { query: TYPES_QUERY },
      customers: { query: CUSTOMERS_QUERY }
    },
    methods: {
      create() {
        const variables = {
            serialNumber: serialNumber.value,
            UDTNumber: UDTNumber.value,
            productionYear: productionYear.value,
            producent: producent.value,
            type: type.value,
            owner: owner.value
        }
        console.log(variables)

        this.$apollo.mutate({
          mutation: CREATE_DEVICE,
          variables
        }).then((data) => {
          this.$router.push({ path: `/devices`})
        }).catch((error) => {
          console.log(variables)
          alert(error)
          console.error(error)
        })
      },
    },

    computed: {
      classObject: function(){
        return {
          dim:    this.serialNumber
                & this.UDTNumber
                & this.productionYear
                & this.producent
                & this.type
                & this.owner
        }
      }
    }
  }
</script>

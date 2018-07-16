<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>
    <template v-else>
      <h1>Nowe urządzenie</h1>
      <form @submit.prevent="create">
        <label for="UDTNumber">Numer UDT</label>
        <input id="UDTNumber" v-model="UDTNumber" placeholder="Numer UDT" type="text" auto-focus />

        <label for="serialNumber">Numer seryjny</label>
        <input id="serialNumber" v-model="serialNumber" placeholder="Numer seryjny" type="text" />

        <label for="registrationNumber">Numer rejestracyjny</label>
        <input id="registrationNumber" v-model="registrationNumber" placeholder="Numer seryjny" type="text" />

        <label for="productionYear">Rok produkcji</label>
        <input id="productionYear" v-model="productionYear" placeholder="Rok produkcji" type="text" />

        <label for="producent">Producent</label>
        <input id="producent" v-model="producent" placeholder="Producent" type="text" />

        <label for="producentNumber">Typ</label>
        <input id="producentNumber" v-model="producentNumber" placeholder="Typ" type="text" />

        <label for="type">Rodzaj</label>
        <select id="type" v-model="type">
          <option v-for="deviceType in deviceTypes" :key="deviceType.id" :value="deviceType.id">{{deviceType.preferedName ? deviceType.preferedName : deviceType.name}}</option>
        </select>

        <label for="owner">Właściciel</label>
        <select id="owner" v-model="owner">
          <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{customer.name}}</option>
        </select>

        <button>Dodaj</button>
      </form>
    </template>
  </div>
</template>

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'
  const CREATE_DEVICE = gql `
    mutation CreateDeviceMutation($serialNumber: String, $UDTNumber: String, $productionYear: String, $producent: String, $type: ID!, $owner: ID!, $registrationNumber: String, $producentNumber: String) {
      createDevice(serialNumber: $serialNumber, UDTNumber: $UDTNumber, productionYear: $productionYear, producent: $producent, type: $type, owner: $owner, registrationNumber: $registrationNumber, producentNumber: $producentNumber) {
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
      registrationNumber: '',
      productionYear: '',
      producent: '',
      producentNumber: '',
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
            serialNumber: this.serialNumber,
            UDTNumber: this.UDTNumber,
            registrationNumber: this.registrationNumber,
            productionYear: this.productionYear,
            producent: this.producent,
            type: this.type,
            owner: this.owner
        }

        this.$apollo.mutate({
          mutation: CREATE_DEVICE,
          variables
        }).then((data) => {
          this.$router.push({ name: 'DeviceList' })
        }).catch((error) => {
          console.log(variables)
          alert(error)
          console.error(error)
        })
      }
    }
  }
</script>

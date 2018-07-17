<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>
    <template v-else>
      <h1>Edytuj dane urządzenia</h1>
      <form @submit.prevent="update">
        <label for="serialNumber">Numer seryjny</label>
        <input id="serialNumber" v-model="editedDevice.serialNumber" placeholder="Numer seryjny" />

        <label for="UDTNumber">Numer UDT</label>
        <input id="UDTNumber" v-model="editedDevice.UDTNumber" placeholder="Numer UDT" />

        <label for="registrationNumber">Numer rejestracyjny</label>
        <input id="registrationNumber" v-model="editedDevice.registrationNumber" placeholder="Numer rejestracyjny" />

        <label for="productionYear">Rok produkcji</label>
        <input id="productionYear" v-model="editedDevice.productionYear" placeholder="Rok produkcji" />

        <label for="producent">Producent</label>
        <input id="producent" v-model="editedDevice.producent" placeholder="Producent" />

        <label for="producentNumber">Typ</label>
        <input id="producentNumber" v-model="editedDevice.producentNumber" placeholder="Typ" />

        <label for="capacity">Udźwig</label>
        <input id="capacity" v-model="editedDevice.capacity" placeholder="Udźwig" />

        <label for="type">Rodzaj</label>
        <select id="type" v-model="editedDevice.type.id" required>
          <option v-for="type in deviceTypes" :key="type.id" :value="type.id">{{type.preferedName ? type.preferedName : type.name}}</option>
        </select>

        <label for="owner">Właściciel</label>
        <select id="owner" v-model="editedDevice.owner.id" required>
          <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{customer.name}}</option>
        </select>

        <button>Zapisz</button>
      </form>
    </template>
  </div>
</template>

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'

  const UPDATE_DEVICE = gql `
    mutation UpdateDeviceMutation($id: ID!, $data: DeviceUpdateInput!) {
      updateDevice(id: $id, data: $data) {
        id
      }
    }
  `
  const DEVICE_QUERY = gql`
    query DeviceQuery($id: ID!) {
      device(id: $id) {
        id
        type {
          id
          name
        }
        serialNumber
        UDTNumber
        registrationNumber
        productionYear
        producent
        producentNumber
        capacity
        owner {
          id
          name
        }
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
      device: {},
      editedDevice: { type: {}, owner: {} },
      deviceTypes: {},
      customers: {}
    }),

    apollo: {
      device: {
        query: DEVICE_QUERY,
        variables() {
          return {id: this.$route.params.id}
        },
        update({ device }) {
          this.editedDevice = JSON.parse(JSON.stringify(device))
        },
      },
      deviceTypes: { query: TYPES_QUERY },
      customers: { query: CUSTOMERS_QUERY }
    },

    methods: {
      update() {
        const variables = {
          id: this.$route.params.id,
          data: {
            serialNumber: this.editedDevice.serialNumber,
            UDTNumber: this.editedDevice.UDTNumber,
            productionYear: this.editedDevice.productionYear,
            registrationNumber: this.registrationNumber,
            producent: this.editedDevice.producent,
            type: this.editedDevice.type.id,
            owner: this.editedDevice.owner.id,
            producentNumber: this.editedDevice.producentNumber,
            capacity: this.editedDevice.capacity
          }
        }

        this.$apollo.mutate({
          mutation: UPDATE_DEVICE,
          variables
        }).then((data) => {
          this.$router.push({ path: `/device/${variables.id}`})
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      }
    }
  }
</script>

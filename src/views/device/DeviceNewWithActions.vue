<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>
    <template v-else>
      <h1>Nowe urządzenie</h1>
      <form @submit.prevent="create">
        <label for="UDTNumber">Numer UDT</label>
        <input id="UDTNumber" v-model="device.UDTNumber" placeholder="Numer UDT" type="text" auto-focus />

        <label for="serialNumber">Numer seryjny</label>
        <input id="serialNumber" v-model="device.serialNumber" placeholder="Numer seryjny" type="text" />

        <label for="registrationNumber">Numer rejestracyjny</label>
        <input id="registrationNumber" v-model="device.registrationNumber" placeholder="Numer rejestracyjny" type="text" />

        <label for="productionYear">Rok produkcji</label>
        <input id="productionYear" v-model="device.productionYear" placeholder="Rok produkcji" type="text" />

        <label for="producent">Producent</label>
        <input id="producent" v-model="device.producent" placeholder="Producent" type="text" />

        <label for="producentNumber">Typ</label>
        <input id="producentNumber" v-model="device.producentNumber" placeholder="Typ" type="text" />

        <label for="capacity">Udźwig</label>
        <input id="capacity" v-model="device.capacity" placeholder="Udźwig" type="text" />

        <label for="type">Rodzaj</label>
        <select id="type" v-model="device.type" required>
          <option v-for="deviceType in deviceTypes" :key="deviceType.id" :value="deviceType.id">{{deviceType.preferedName ? deviceType.preferedName : deviceType.name}}</option>
        </select>

        <label for="owner">Właściciel</label>
        <select id="owner" v-model="device.owner" required>
          <option v-for="customer in customers" :key="customer.id" :value="customer.id">{{customer.symbol}} {{customer.name}}</option>
        </select>

        <h3>Akcje <button type="button" @click="addAction('udt')">Dodaj UDT</button> <button type="button" @click="addAction('conservation')">Dodaj Konserwację</button></h3>
        <fieldset v-for="(action, index) in device.actions">
          <template v-if="action.udt">
            <legend>UDT</legend>
            <label :for="'date' + index">Data</label>
            <input :id="'date' + index" type="date" v-model="action.udt.date">
            <label :for="'inspector' + index">Inspektor</label>
            <input :id="'inspector' + index" type="text" v-model="action.udt.inspector" placeholder="Nazwisko Imię">
          </template>
          <template v-if="action.conservation">
            <legend>Konserwacja</legend>
            <label :for="'date' + index">Data</label>
            <input :id="'date' + index" type="date" v-model="action.conservation.date">
          </template>
          <button type="button" @click="removeAction(index)">Usuń</button>
        </fieldset>

        <button>Zapisz urządzenie</button>
      </form>
    </template>
  </div>
</template>

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'
  const CREATE_DEVICE = gql `
    mutation CreateDeviceMutation(
      $serialNumber: String,
      $UDTNumber: String,
      $productionYear: String,
      $producent: String,
      $type: ID!,
      $owner: ID!,
      $registrationNumber: String,
      $producentNumber: String,
      $capacity: String,
      $actions: [AddActionInput]) {
      createDeviceWithActions(
        serialNumber: $serialNumber,
        UDTNumber: $UDTNumber,
        productionYear: $productionYear,
        producent: $producent,
        type: $type,
        owner: $owner,
        registrationNumber: $registrationNumber,
        producentNumber: $producentNumber,
        capacity: $capacity,
        actions: $actions) {
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
        symbol
      }
    }
  `

  export default {
    components: { Loader },
    data: () => ({
      device: { actions:[] },
      deviceTypes: {},
      customers: {},
    }),

    apollo: {
      deviceTypes: { query: TYPES_QUERY },
      customers: { query: CUSTOMERS_QUERY }
    },
    methods: {
      create() {
        const variables = {...this.device}
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
      },
      addAction(type) {
        if (type === 'udt') {
          const udtAction = { udt: { date: new Date().toISOString().substring(0, 10), inspector: '' } }
          this.device.actions.push(udtAction)
        }
        if (type === 'conservation') {
          const conservationAction = { conservation: { date: new Date().toISOString().substring(0, 10) } }
          this.device.actions.push(conservationAction)
        }
      },
      removeAction(index) {
        this.device.actions.splice(index, 1)
      }
    }
  }
</script>

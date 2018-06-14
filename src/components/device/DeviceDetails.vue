<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <router-link :to="{ name: 'DeviceEdit', params: { id: device.id }}">Edytuj</router-link>
    <a href="#" @click="deleteDevice(device.id)">Usun</a>
    <h1>{{device.id}}</h1>
    <ul>
      <li>Właściciel: <router-link :to="{ name: 'CustomerDetails', params: { id: device.owner.id }}">{{ device.owner.name }}</router-link></li>
      <li>Numer seryjny: {{device.serialNumber}}</li>
      <li>Numer UDT: {{device.UDTNumber}}</li>
      <li>Rok produkcji: {{device.productionYear}}</li>
      <li>Producent: {{device.producent}}</li>
      <li>Typ: <router-link :to="{ name: 'DeviceTypeDetails', params: { id: device.type.id }}">{{ device.type.name }}</router-link></li>
    </ul>
    <h4>Nadchodzące terminy</h4>
    <h4>Wykonane akcje</h4>
  </template>
</div>
</template>
<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'
  const DEVICE_QUERY = gql`
    query DeviceQuery($id: ID!) {
      device(id: $id) {
        id
        serialNumber
        UDTNumber
        productionYear
        producent
        type {
          id
          name
        }
        owner {
          name
          id
        }
      }
    }
  `
  const DELETE_MUTATION = gql`
    mutation deleteDevice($id: ID!) {
      deleteDevice(id: $id) {
        id
      }
    }
  `
  export default {
    components: { Loader },
    data() {
      return {
        device: {},
        id: this.$route.params.id
      }
    },

    apollo: {
      device: {
        query: DEVICE_QUERY,
        variables() {
          return {id: this.id}
        }
      },
    },

    methods: {
      deleteDevice(id) {
        this.$apollo.mutate({
          mutation: DELETE_MUTATION,
          variables: { id },
        }).then((data) => {
          this.$router.push({ path: '/devices' })
        }).catch((error) => {
          console.error(error)
          alert(error)
        })
      },
    },
  }
</script>

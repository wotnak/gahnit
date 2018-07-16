<template>
<div>
  <template v-if="$apollo.loading">
    <Loader/>
  </template>

  <template v-else>
    <router-link :to="{ name: 'DeviceEdit', params: { id: device.id }}"  tag="button">Edytuj</router-link>
    <button @click="deleteDevice(device.id)">Usun</button>
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
    <ul>
      <li v-for="term in getAproachingTerms(device.actions, device.type)">
        {{ term.type }} - {{ term.nextDate }} ({{ term.exact }})
      </li>
    </ul>
    <h4>
      Wykonane akcje
      <router-link :to="{ name: 'ActionNew', params: { id: device.id, type: 'conservation' }}"  tag="button">Nowa konserwacja</router-link>
      <router-link :to="{ name: 'ActionNew', params: { id: device.id, type: 'udt' }}"  tag="button">Nowy odbiór UDT</router-link>
    </h4>
    <ul>
      <li v-for="action in device.actions" v-bind:key="action.id">
        {{getDate(action.date)}} - {{ getActionName(action) }}
      </li>
      <li v-if="device.actions.length == 0">Nic tu nie ma.</li>
    </ul>
  </template>
</div>
</template>
<script>
  import Loader from '@/components/Loader'

  import moment from 'moment'
  import pl from 'moment/locale/pl'
  moment.locale('pl')

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
          conservationEveryNDays
          udtEveryNDays
        }
        owner {
          name
          id
        }
        actions {
          id
          date
          description
          ... on Conservation {
            employee
            start
            end
          }
          ... on UDT {
            inspector
          }
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
      getAproachingTerms(actions, type) {
        const now = moment()

        const conservations = actions.filter((a) => { return a.__typename=="Conservation" } ).sort( (a,b) => { return a.date > b. date } )
        const udts = actions.filter((a) => { return a.__typename=="UDT" } ).sort( (a,b) => { return a.date > b. date } )
        const {conservationEveryNDays = 0, udtEveryNDays = 0} = type
        const nextUDTDate = udts[0] != undefined ? moment(udts[0].date).add(udtEveryNDays, 'd') : now
        const nextConservationDate = conservations[0] != undefined ? moment(conservations[0].date).add(conservationEveryNDays, 'd') : now
        return [
          { type: "Konserwacja", nextDate: now.to(nextConservationDate), exact: nextConservationDate.format("DD/M/YYYY") },
          { type: "Odbiór UDT", nextDate: now.to(nextUDTDate), exact: nextUDTDate.format("DD/M/YYYY") }
        ]

      },
      getDate(date) {
        return moment(new Date(date)).format("DD/M/YYYY")
      },
      getActionName(action) {
        if (action.__typename == "Conservation") return "Konserwacja"
        if (action.__typename == "UDT") return "Odbiór UDT"
        return "Serwis"
      },
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
      }
    }
  }
</script>

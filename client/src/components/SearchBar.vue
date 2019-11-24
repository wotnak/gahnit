<template>
<div>
  <form @submit.prevent="search()">
    <input type="text" id="query" v-model="query" required /> <button>Szukaj</button>
  </form>
  <div v-show="showResults" id="searchResultsBg" @click="() => {this.showResults = false}"></div>
  <div v-show="showResults" class="results" id="searchResults">
    <template v-if="this.results.lenght == 0">
      <p>Brak wyników.</p>
    </template>
    <template v-else>
      <table>
        <tr>
          <th>Typ</th>
          <th>Wynik</th>
        </tr>
        <tr v-for="result in results" :key="result.id">
          <template v-if="result.__typename === 'Customer'">
            <td><router-link :to="{ name: 'CustomerDetails', params: { id: result.id }}">Klient</router-link></td>
            <td><router-link :to="{ name: 'CustomerDetails', params: { id: result.id }}">{{ result.name }}</router-link></td>
          </template>
          <template v-else-if="result.__typename === 'Device'">
            <td><router-link :to="{ name: 'DeviceDetails', params: { id: result.id }}">Urządzenie</router-link></td>
            <td><router-link :to="{ name: 'DeviceDetails', params: { id: result.id }}">{{ result.type.name }} {{ result.serialNumber }}</router-link></td>
          </template>
          <template v-else>
            <td>{{ result.__typename }}</td>
            <td></td>
          </template>
        </tr>
    </table>
    </template>
  </div>
</div>
</template>

<style lang="stylus" scoped>
form
  input, button
    z-index: 3
form
  flex-direction: row

#searchResultsBg
  width: 100%
  height: 100%
  position: fixed
  top: 0
  left: 0
  z-index: 2
  background-color: black
  opacity: .7

.results
  position: absolute
  background-color: #1d2227
  color: #fff
  top: 40px
  border-radius: 0 0 2px 2px
  width: 800px
  left: calc(50vw - 400px)
  z-index: 3
  
  table
    width: 100%

    tr:hover
      background-color: lighten(#1d2227, 20%)


    tr:last-child > a
      border-radius: 0 0 2px 2px

    a
      color: inherit
      display: block
      text-align: left
      padding: 5px
      text-decoration: none

</style>

<script>
  import gql from 'graphql-tag'

  const SEARCH_QUERY = gql`
    query SearchQuery($query: String!) {
      search(query: $query) {
        __typename
        ...on Customer {
          id
          name
        }
        ...on Device {
          id
          serialNumber
          type {
            id
            name
          }
        }
      }
    }
  `

  export default {
    name: 'SearchBar',
    data: () => ({
      showResults: false,
      results: [],
      query: ""
    }),
    methods: {
      search() {
        const variables = {
          query: this.query,
        }
        this.$apollo.query({
          query: SEARCH_QUERY,
          variables
        }).then( (results) => {
          this.results = results.data.search
          this.showResults = true
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      }
    }

  }
</script>

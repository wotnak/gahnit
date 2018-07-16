<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>
    <template v-else>

      <template v-if="$route.params.type=='conservation'">
        <h1>Nowa konserwacja</h1>
        <form @submit.prevent="newConservation">
          <label for="date">Data</label>
          <input id="date" type="date" v-model="conservation.date" required />
          <!-- <label for="employee">Pracownik</label> -->
          <!-- <input id="employee" type="text" v-model="conservation.employee" placeholder="Pracownik" /> -->
          <!-- <label for="start">Rozpoczęcie pracy</label> -->
          <!-- <input id="start" type="text" v-model="conservation.start" placeholder="7:30" /> -->
          <!-- <label for="end">Zakończenie pracy</label> -->
          <!-- <input id="end" type="text" v-model="conservation.end" placeholder="9:00" /> -->
          <!-- <span> -->
            <!-- <label for="elements">Pozycje</label> <button type="button" @click="addElement">Dodaj kolejną</button> -->
          <!-- </span> -->
          <!-- <div v-for="element in conservation.elements" v-bind:key="element.id"> -->
            <!-- <input type="text" v-model="element.name" placeholder="Opis"> -->
            <!-- <input type="number" v-model="element.amount" placeholder="Ilość" min="0"> -->
            <!-- <input type="number" v-model="element.price" placeholder="Cena" min="0"> -->
          <!-- </div> -->

          <button>Zapisz</button>
        </form>
      </template>

      <template v-else-if="$route.params.type=='udt'">
        <h1>Nowy odbiór UDT</h1>
        <form @submit.prevent="newUDT">
          <label for="date">Data</label>
          <input id="date" type="date" v-model="udt.date" required />
          <label for="inspector">Inspektor</label>
          <input id="inspector" type="text" v-model="udt.inspector" required />

          <button>Zapisz</button>
        </form>
      </template>

    </template>
  </div>
</template>

<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'

  const ADD_ACTION = gql `
    mutation AddActionMutation($deviceId: ID!, $data: AddActionInput!) {
      addAction(deviceId: $deviceId, data: $data) {
        id
      }
    }
  `

  const today = new Date().toISOString().substring(0, 10)

  export default {
    components: { Loader },
    data: () => ({
      conservation: { date: today, elements: [{}] },
      udt: { date: today }
    }),

    methods: {
      addElement: function () {
        this.conservation.elements.push({});
      },

      newConservation() {
        const variables = {
          deviceId: this.$route.params.id,
          data: { conservation: this.conservation }
        }
        this.$apollo.mutate({ mutation: ADD_ACTION, variables })
          .then((data) => { this.$router.push({ path: `/device/${variables.deviceId}`}) })
          .catch((error) => {
            alert(error)
            console.error(error)
          })
      },
      newUDT() {
        const variables = {
          deviceId: this.$route.params.id,
          data: { udt: this.udt }
        }
        this.$apollo.mutate({ mutation: ADD_ACTION, variables })
          .then((data) => { this.$router.push({ path: `/device/${variables.deviceId}`}) })
          .catch((error) => {
            alert(error)
            console.error(error)
          })
      }
    }
  }
</script>

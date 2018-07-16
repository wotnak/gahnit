<template>
<div>
  <h1>Nowy rodzaj urządzeń</h1>
  <form @submit.prevent="create">
    <label for="name">Pełna nazwa</label>
    <input id="name" auto-focus v-model="name" placeholder="Skomplikowany podnośny dźwig" type="text" required />
    <label for="preferedName">Nazwa zwyczajowa</label>
    <input id="preferedName" v-model="preferedName" placeholder="Dźwig" type="text" required/>

    <label for="conservationEveryNDays">Konserwacja co N dni</label>
    <input id="conservationEveryNDays" v-model="conservationEveryNDays" type="number" step="1" min="0" required/>

    <label for="udtEveryNDays">UDT co N dni</label>
    <input id="udtEveryNDays" v-model="udtEveryNDays" type="number" step="1" min="0" required/>

    <button>Dodaj</button>
  </form>
</div>
</template>

<script>
  import gql from 'graphql-tag'
  const CREATE_DEVICE_TYPE = gql `
    mutation CreateDeviceTypeMutation($name: String!, $preferedName: String, $conservationEveryNDays: Int, $udtEveryNDays: Int) {
      createDeviceType(name: $name, preferedName: $preferedName, conservationEveryNDays: $conservationEveryNDays, udtEveryNDays: $udtEveryNDays) {
        id
      }
    }
  `

  export default {
    data: () => ({
      name: '',
      preferedName: '',
      conservationEveryNDays: '',
      udtEveryNDays: ''
    }),

    methods: {
      create() {
        this.$apollo.mutate({
          mutation: CREATE_DEVICE_TYPE,
          variables: {
            name: this.name,
            preferedName: this.preferedName,
            conservationEveryNDays: this.conservationEveryNDays,
            udtEveryNDays: this.udtEveryNDays
          },
        }).then((data) => {
          this.$router.push({ name: `DeviceTypeList`})
        }).catch((error) => {
          // Error
          alert(`Error from ${error}`)
          console.error(error)
        })
      },
    }
  }
</script>

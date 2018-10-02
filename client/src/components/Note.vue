<template>
<div class="note">
    <p class="note--content">{{ note.current.content }}</p>
    <div class="note--details">
      {{ getTime(note.current.timestamp) }} - <router-link :to="{ name: 'UserDetails', params: { id: note.current.author.id }}">{{ note.current.author.displayName }}</router-link>
      <template v-if="this.device">
        <a class="note--details--delete" @click="deleteNote(note.id)">Usuń</a>
      </template>
    </div>
</div>
</template>

<style lang="stylus">
.note
  background-color: #ffffff
  box-shadow: 2px 2px 0 #d6d6d6
  border: 1px solid #d6d6d6
  padding: 5px
  border-radius: 2px
  
  .note--content
    margin: 0
    
  .note--details
    font-size: 12px
    color: #95999c
    
    a
      color: inherit
      text-decoration: underline
      cursor: pointer
    .note--details--delete
      float: right
</style>

<script>
  import moment from 'moment'
  import pl from 'moment/locale/pl'
  moment.locale('pl')

  import gql from 'graphql-tag'

  const DELETE_NOTE = gql `
    mutation DeleteNoteMutation($device: ID!, $note: ID!) {
      deleteDeviceNote(device: $device, note: $note) {
        id
      }
    }
  `

  export default {
    props: {
      note: Object,
      device: String
    },
    methods: {
      getTime(timestamp) {
        return moment(timestamp).format("H:mm, D/MM/YYYY")
      },
      deleteNote(noteId) {
        const variables = {
          device: this.device,
          note: noteId
        }
        this.$apollo.mutate({
          mutation: DELETE_NOTE,
          variables
        }).then((data) => {
          this.$router.go({ name: 'DeviceDetails', params: { id: this.device } })
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      }
    }

  }
</script>

<template>
<div>
  <template v-if="!isEdited">
    <div class="note">
      <p class="note--content">{{ note.current.content }}</p>
      <div class="note--details">
        {{ getTime(note.current.timestamp) }} - <router-link :to="{ name: 'UserDetails', params: { id: note.current.author.id }}">{{ note.current.author.displayName }}</router-link>
        <template v-if="this.device">
          <div class="note--details--actions"><a @click="startEditing()">Edytuj</a> <a @click="deleteNote(note.id)">Usuń</a></div>
        </template>
      </div>
    </div>
  </template>
  <template v-else>
    <form class="note" @submit.prevent="updateNote(note.id)">
      <textarea id="content" v-model="content" required></textarea>
      <button>Zapisz</button>
    </form>
  </template>
</div>
</template>

<style>
.note {
  background-color: #fff;
  box-shadow: 2px 2px 0 #d6d6d6;
  border: 1px solid #d6d6d6;
  padding: 5px;
  border-radius: 2px;
}
.note .note--content {
  margin: 0;
}
.note .note--details {
  font-size: 12px;
  color: #95999c;
}
.note .note--details a {
  color: inherit;
  text-decoration: underline;
  cursor: pointer;
  margin-left: 2px;
}
.note .note--details .note--details--actions {
  float: right;
}

</style>

<script>
  import dayjs from 'dayjs'

  import gql from 'graphql-tag'

  const DELETE_NOTE = gql `
    mutation DeleteNoteMutation($device: ID!, $note: ID!) {
      deleteDeviceNote(device: $device, note: $note) {
        id
      }
    }
  `

  const UPDATE_NOTE = gql `
    mutation UpdateNoteMutation($device: ID!, $note: ID!, $data: NoteInput!) {
      modifyDeviceNote(device: $device, note: $note, data: $data) {
        id
        current {
          timestamp
          content
          author {
            id
            displayName
          }
        }
      }
    }
  `

  export default {
    props: {
      note: Object,
      device: String
    },
    data: () => ({
      isEdited: false,
      content: ""
    }),
    methods: {
      getTime(timestamp) {
        return dayjs(timestamp, "DD-MM-YYYY HH:mm:ss GMTZZ").format("H:mm, D/MM/YYYY")
      },
      deleteNote(noteId) {
        const variables = {
          device: this.device,
          note: noteId
        }
        this.$apollo.mutate({
          mutation: DELETE_NOTE,
          variables,
          refetchQueries: [{
            query: gql`
              query UpdateCache($id: ID!) {
                device(id: $id) {
                  id
                  notes {
                    id
                    current {
                      timestamp
                      content
                      author {
                        id
                        displayName
                      }
                    }
                  }
                }
              }
            `,
            variables: { id: this.device },
          }],
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      },
      startEditing() {
        if (this.device) {
          this.content = this.note.current.content
          this.isEdited = true
        }
        else
          console.error("Can't edit note (device id is undefined).")
      },
      updateNote(noteId) {
        const variables = {
          device: this.device,
          note: noteId,
          data: { content: this.content }
        }
        this.$apollo.mutate({
          mutation: UPDATE_NOTE,
          variables
        }).then(()=>{
          this.isEdited = false
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      }
    }

  }
</script>

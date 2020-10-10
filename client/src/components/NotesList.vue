<template>

<ul class="notesList">
  <li v-for="note in notes">
    <Note :device="device" :note="note"/>
  </li>
  <li>
    <form class="note" @submit.prevent="newNote">
      <textarea id="content" v-model="content" required></textarea>
      <button>Dodaj</button>
    </form>
  </li>
</ul>

</template>

<style>
.notesList {
  list-style-type: none;
  padding: 0;
}
.notesList li {
  margin-bottom: 5px;
}
.notesList textarea {
  box-sizing: border-box;
  height: 100px;
  font-family: inherit;
  font-size: inherit;
  border: solid 1px;
  border-color: inherit;
  resize: none;
  border-radius: 2px;
  transition: border-color 0.3s cubic-bezier(0.4, 0, 1, 1);
}
.notesList textarea:focus {
  outline: none;
  border-color: #1d2227;
  transition: border-color 0.3s cubic-bezier(0.4, 0, 1, 1);
}
</style>

<script>
  import Note from "./Note.vue"

  import gql from 'graphql-tag'

  const ADD_NOTE = gql `
    mutation AddNoteMutation($device: ID!, $data: NoteInput!) {
      addDeviceNote(device: $device, data: $data) {
        id
      }
    }
  `

  export default {
    components: { Note },
    props: {
      notes: Array,
      device: String
    },
    data: () => ({
      content: ""
    }),
    methods: {
      newNote() {
        const variables = {
          device: this.device,
          data: { content: this.content }
        }
        this.$apollo.mutate({
          mutation: ADD_NOTE,
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
        }).then((data) => {
          this.content = ""
        }).catch((error) => {
          alert(error)
          console.error(error)
        })
      }
    }
  }
</script>

<template>
<div class="note">
    <p class="note--content">{{ note.current.content }}</p>
    <div class="note--details">{{ getTime(note.current.timestamp) }} - <router-link :to="{ name: 'UserDetails', params: { id: note.current.author.id }}">{{ note.current.author.displayName }}</router-link></div>
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
</style>

<script>
  import moment from 'moment'
  import pl from 'moment/locale/pl'
  moment.locale('pl')

  export default {
    props: {
      note: Object
    },
    methods: {
      getTime(timestamp) {
        return moment(timestamp).format("H:mm, D/MM/YYYY")
      }
    }

  }
</script>

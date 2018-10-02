<template>

<ul class="notesList">
	<li v-for="note in notes">
		<Note :note="note"/>
	</li>
</ul>

</template>

<style lang="stylus">
.notesList
	list-style-type: none
	padding: 0
</style>

<script>
  import Note from "@/components/Note"

  export default {
  	components: { Note },
    props: {
      notes: Array
    }
  }
</script>

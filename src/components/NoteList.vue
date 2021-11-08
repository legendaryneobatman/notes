<template>
  <div class="note__list">
    <note-item
    v-for="note in this.$store.state.note.notes"
    :key="note.id"
    :note="note"
    />
    <!-- note item -->
  </div>
  <!-- note list -->
</template>

<script>

import NoteItem from "./NoteItem";

export default {
  components: {NoteItem},
  name: `note-list`,
}
</script>

<style scoped>
.note__list {
  column-count: 2;
  grid-column-gap: 0.7em;
  background-color: transparent;
  padding: 1em;
}

</style>

<template>
  <div class="note__list">
    <note-item
    v-for="note in notes"
    :key="note.id"
    :note="note"
    @updateNoteEdit="onChange"
    ></note-item>

    <!-- note item -->
  </div>
  <!-- note list -->
</template>

<script>

import NoteItem from "./NoteItem";

export default {
  components: {NoteItem},
  name: `note-list`,
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
  data() {

  },
  methods: {
    onChange(note){
      this.$emit('onChange', note)
    }
  }

};
</script>

<style scoped>
.note__list {
  column-count: 2;
  grid-column-gap: 0.7em;
}

</style>

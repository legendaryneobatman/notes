<template>
  <div class="note__list"  >
    <note-item v-for="note in notes" :key="note.id" :note="note"></note-item>


    <!-- note item -->
  </div>
  <!-- note list -->
</template>

<script>

import NoteItem from "./NoteItem";

export default {
  name: "note-list",
  components: {NoteItem},
  props: {
    notes: {
      type: Array,
      required: true,
    }
  },
  methods: {

  }
};
</script>

<style scoped>
.note__list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>

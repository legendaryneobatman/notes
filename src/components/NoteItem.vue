<template>
  <div
      class="note"
  >
    <note-view
        class="note-item"
        v-show="!this.$store.state.note.noteStatus"
    />
    <note-form
        class="note-item"
        v-show="this.$store.state.note.noteStatus"
    />
  </div>

</template>

<script>


import NoteView from "./NoteView";
import NoteForm from "./NoteForm";

export default {
  components: {NoteForm, NoteView,},
  data() {
    return {
      noteEdit: {
        id: null,
        title: '',
        body: '',
      },
      isDark: false,
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.note {
  margin: 0;
  display: grid;
  grid-template-rows: 1fr auto;
  break-inside: avoid;
  padding-bottom: 0.7em;

  height: 100px;

}

</style>


<template>
  <div class="note-list">
    <note-item
    v-for="note in notes"
    :key="note.id"
    :note="note"
    class="note-list__item"
    @updateNoteEdit="onChange"
    ></note-item>
  </div>
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
  data: () => ({}),
  methods: {
    onChange(note){
      this.$emit('onChange', note)
    }
  }

};
</script>

<style lang="scss" scoped>
.note-list {
  column-count: 2;
  grid-column-gap: 0.7em;

  &__item {
    display: grid;
    grid-template-rows: 1fr auto;
    break-inside: avoid;
    padding-bottom: 0.7em;
    margin-bottom: 10px;
  }
}

</style>

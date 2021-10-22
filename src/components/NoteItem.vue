<template>
  <div class="note-item">
    <note-view
        v-if="isEdit"
        :note="note"
        class="note-item__view"
        @toggleEdit="toggleEdit"
    />
    <note-form
        v-else
        :note="note"
        class="note-item__form"
        @toggleEdit="toggleEdit"
    />
  </div>
</template>

<script>

import NoteForm from "./NoteForm";
import NoteView from "./NoteView";
export default {
  components: {
    NoteView,
    NoteForm
  },
  props: {
    note: {
      type: Object,
    },
  },
  data() {
    return {
      isEdit: true,
    }
  },
  methods: {
    toggleEdit() {
      this.isEdit = !this.isEdit;
    },
  }
}
;
</script>

<style lang="scss" scoped>
.note-item {
  background: white;
  padding: 1rem;
  border-radius: 20px;
  border: 0.5px solid #adadad;
}
</style>


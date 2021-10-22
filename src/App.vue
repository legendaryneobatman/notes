<template>
  <div id="note-app" class="notes">
    <header class="notes__header">
      <fa
          icon="star-half-alt"
          @click="toggleTheme"
      />
    </header>
    <note-list
        :notes="notes"
        class="notes__list"
    ></note-list>
    <float-button
        class="notes__button"
        @click="createEmptyNote"
    >
      +
    </float-button>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import NoteList from '@/components/NoteList.vue'
import FloatButton from "./components/UI/FloatButton";

export default {
  components: {
    FloatButton,
    NoteList,
  },
  data: () => ({
    search: ''
  }),
  computed: {
    notes () {
      return this.$store.getters['note/getNotes'](this.search)
    }
  },
  methods: {
    toggleTheme() {
      this.$store.dispatch('note/toggleTheme')
    },
    createEmptyNote() {
      this.$store.dispatch('note/addNote', { id: uuidv4(), title: '', body: '' })
    }
  },
};
</script>

<style lang="scss">
html {
  overflow: hidden;
  background-color: #e0e0e0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.notes {
  padding: 10px;

  &__list {
    margin-top: 20px;
  }
}
</style>

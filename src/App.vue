<template>
  <header>
    <fa
        icon="star-half-alt"
        @click="toggleTheme"
    />
  </header>
    <note-list
        :notes="notes"
        @onChange="updateNote"
    ></note-list>
    <note-button @create="createNote"></note-button>
  <!-- BODY OF APP containes note list and form -->
</template>

<script>
import NoteButton from '@/components/NoteButton.vue'
import NoteList from '@/components/NoteList.vue'

export default {
  components: {
    NoteButton,
    NoteList,
  },
  data() {
    return {
      notes: [],
    };
  },
  methods: {
    createNote(note) {
      this.notes.push(note);

    },
    updateNote(note) {
      const index = this.notes.findIndex((item) => item.id === note.id)
      this.notes[index] = note
      window.localStorage.setItem('notes', JSON.stringify(this.notes))
    },
    toggleTheme() {
      this.$store.dispatch('note/toggleTheme')
    },
    initLocalStorage() {
      if (localStorage.getItem("notes") === null) {
        window.localStorage.setItem('notes', JSON.stringify(this.notes))
      } else {
        this.notes = JSON.parse(window.localStorage.getItem('notes'))
      }
    },

  },
  computed: {

  },
  mounted() {
    this.initLocalStorage()
  }
};
</script>

<style >
:root {
  --app-background-color: #FFFFFF;
  --dynamic-title-color: #363636;
  --dynamic-subtitle-color: #4a4a4a;
}
[theme="dark"] {
  --app-background-color: #000000;
  --dynamic-title-color: #FFFFFF;
  --dynamic-subtitle-color: #e0e0e0;
}
html {
  overflow: hidden;
  background-color: #e0e0e0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

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
      notes: [
        {id: 1, title: "Javascript 1", body: "Описание поста 1"},
        {id: 2, title: "Javascript 2", body: "Описание поста 2"},
        {id: 3, title: "Javascript 3", body: "Описание поста 3"},
      ],
    };
  },
  methods: {
    createNote(note) {
      this.notes.push(note);

    },
    updateNote(note) {
      const index = this.notes.findIndex((item) => item.id === note.id)
      this.notes[index] = note
    },
    toggleTheme() {
      this.$store.dispatch('note/toggleTheme')
    },


  },
  computed: {

  }
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
</style>

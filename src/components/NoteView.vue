<template>
  <div
      class="note-view"
      @click="showNoteEdit"
  >
    <burger-menu :note="this.note"/>
    <h2 class="note-view__title">{{ note.title }}</h2>
    <p class="note-view__body">{{ note.body }}</p>
  </div>
</template>

<script>

import BurgerMenu from "./UI/MyBurgerMenu";
export default {
  name: "note-view",
  components: {BurgerMenu},
  props:{
    note:{
      type:Object,
    }
  },
  methods: {
    deleteNote() {
      this.$store.dispatch('note/deleteNote', this.note)
    },
    setEdit() {
      this.$store.dispatch('note/changeNoteStatus')
      document.addEventListener('click', this.outsideClickListener)
    },
    outsideClickListener(event) {
      const target = event.target;
      if (this.$el.contains(target) === false && !this.noteStatus) {
        this.onSubmit();
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.note-view {
  display: flex;
  flex-direction: column;
  font-family: $font-main;
  margin: 10px;
  overflow: hidden;
  &__header {
    display: flex;
    flex-direction: row;
    &__title {
      display: inline-flex;
      width: 100%;
    }
    &__body {

    }
  }
}
</style>

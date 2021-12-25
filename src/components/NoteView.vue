<template>
  <div
      class="note-view"
      @click="showNoteEdit"
  >
    <nav class="note-view__menu">
      <burger-menu
          :note="this.note"
      />
    </nav>
    <h2 class="note-view__title">{{ note.title }}</h2>
    <p class="note-view__body">{{ note.body }}</p>
  </div>
</template>

<script>

import BurgerMenu from "./MyBurgerMenu";
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
  background-color: #eeeeee;
  border: 1px solid #4a4a4a;
  border-radius: 10px;
  font-family: $font-main;
  padding: 10px;
  box-shadow: 0 20px 63px 2px rgba(7, 22, 34, 0.2);

  &__header {
    display: flex;
    flex-direction: row;

    &__title {
      display: inline-flex;
      width: 100%;
      height: 20px;

    }
    &__body {

    }
  }
}
</style>

<template>
  <div class="note-view">
    <h2 class="note-view__title">title{{  }}</h2>
    <p class="note-view__body">body{{ }}</p>
  </div>
</template>

<script>

export default {
  name: "note-view",
  components: {},
  methods: {
    deleteNote() {
      this.$store.dispatch('note/deleteNote',)
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
  mounted() {

  }

}
</script>

<style lang="scss" scoped>
.note-view {
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
  border: 1px solid #4a4a4a;
  border-radius: 10px;
  font-family: $font-main;
  padding: 10px;


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

<template>
  <div
      class="note"
  >
    <note-view
        class="note-item"
        v-show="!note.noteStatus"
        :note="note"
        @mousedown="setHoldTime"
        @mouseup="clearTimer"

    />
    <note-form
        class="note-item"
        v-show="note.noteStatus"
        :note="note"

    />
  </div>

</template>

<script>


import NoteView from "./NoteView";
import NoteForm from "./NoteForm";

export default {
  components: {NoteForm, NoteView,},
  props: {
    note: {
      type: Object
    }
  },
  data() {
    return {
      holdStart: 0,
      holdTime: 0,
      timerId:null,
    }
  },
  methods: {
    setHoldTime() {
      this.holdStart = Date.now()
      this.timerId = setInterval(this.computeHoldTime);

    },
    clearTimer() {
      clearInterval(this.timerId)
    },
    computeHoldTime() {
      this.holdTime = Date.now() - this.holdStart;
      this.setForm()
    },
    setForm() {
      if (this.holdTime >= 750 && this.note.noteStatus === false) {
        this.$store.dispatch('note/changeNoteStatus', this.note)
        clearInterval(this.timerId)
      }
    },
    setView() {
      document.addEventListener('click',e => {
        let target = e.target
        let block = this.$el
        if (!block.contains(target) && this.note.noteStatus === true) {
          this.$store.dispatch('note/changeNoteStatus', this.note)
        }
      })
    },
    updateNote(){
      this.$store.dispatch('note/updateNote', this.note)
    },
  },
  mounted() {
    this.setView()
  },
  updated() {
    this.updateNote()
  }
}
</script>

<style lang="scss" scoped>
.note {
  display: grid;
  grid-template-rows: 1fr auto;
  break-inside: avoid;

  min-height: 100px;

  margin: 0;
  padding-bottom: 0.7em;
  &-item {
    display: grid;
    grid-template-rows: 1fr auto;
    break-inside: avoid;
  }
}

</style>


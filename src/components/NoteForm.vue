<template>
  <div
      class="note-form"
  >
    <my-input
        class="note-form__title"
        type="text"
        placeholder="Заголовок  заметки"
        :value="this.noteForm.title"
        @input="updateNoteFormTitle"
    />
    <my-input
        class="note-form__body"
        type="text"
        placeholder="Тело заметки"
        :value="this.noteForm.body"
        @input="updateNoteFormBody"
    />
  </div>
</template>

<script>
import MyInput from "./UI/MyInput";

export default {
  name: "note-form",
  components: {MyInput},
  props: {
    note: {
      type: Object
    }
  },
  data() {
    return {
      myInputValue:'',
      noteForm:{title:'',body:'',}
    }
  },
  methods: {
    updateNoteFormTitle(event){
      this.$store.dispatch('note/updateNoteFormTitle', {event:event, note:this.note})
    },
    updateNoteFormBody(event){
      this.$store.dispatch('note/updateNoteFormBody', {event:event, note:this.note})
    },
  },
  computed : {



  }
}

</script>

<style lang="scss" scoped>
.note-form {
  display: flex;
  flex-direction: column;
  background-color: #c4c4c4;
  border: 1px solid #4a4a4a;
  border-radius: 10px;
  font-family: $font-main;
  padding: 10px;

  &__title {
    cursor: text;
  }

  &__body {
    cursor: text;
    min-height: 100px;
  }
}
</style>

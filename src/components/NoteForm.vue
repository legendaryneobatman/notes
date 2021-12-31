<template>
  <div
      class="note-form"
  >
    <burger-menu
        :note="this.note"
        class="note-form__burger"
    />
    <my-input
        class="note-form__title"
        type="text"
        placeholder="Заголовок  заметки"
        :value="this.noteForm.title"
        @input="updateNoteFormTitle"
    />
    <!--<my-input
        class="note-form__body"
        type="text"
        placeholder="Тело заметки"
        :value="this.noteForm.body"
        @input="updateNoteFormBody"
    />-->
    <my-text-area
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
import BurgerMenu from "./UI/MyBurgerMenu";
import MyTextArea from "./UI/MyTextArea";

export default {
  name: "note-form",
  components: {MyTextArea, BurgerMenu, MyInput},
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
  padding: 10px;
  &__burger{
    position: absolute;
    top: -20px;
  }

  &__title {
    cursor: text;
  }

  &__body {
    cursor: text;
    min-height: 100px;
  }
}
</style>

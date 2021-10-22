<template>
  <form
      @submit.prevent="onSubmit"
      class="note-form"
  >
    <div class="note-form__group">
      <custom-input
          v-model="noteForm.title"
          label="Заголовок"
          class="note-form__field"
      />
    </div>
    <div class="note-form__group">
      <custom-text-area
          v-model="noteForm.body"
          label="Заголовок"
          class="note-form__field"
      />
      <icon-button class="note-form__button">
        <fa
            @click="onSubmit"
            icon="check"
        />
      </icon-button>
    </div>
  </form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import CustomInput from "./UI/CustomInput";
import IconButton from "./UI/IconButton";
import CustomTextArea from "./UI/CustomTextArea";
export default {
  name: 'NoteForm',
  components: {
    CustomTextArea,
    IconButton,
    CustomInput,
  },
  props: {
    note: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    noteForm: {
      id: uuidv4(),
      title: '',
      body: '',
    }
  }),
  mounted() {
    // Проверяем был ли передан объект в пропс `note`
    if (Object.keys(this.note).length > 0) {
      // Пересобираем объект, который пришел в пропс, чтобы удалить связь по ссылке
      this.noteForm = {...this.note}
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('note/updateNote', this.noteForm)
      this.$emit('toggleEdit')
    },
  },
}

</script>

<style lang="scss" scoped>
.note-form {
  width: 100%;

  &__group {
    display: flex;
    align-items: flex-end;

    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &__field {
    width: 100%;
  }

  &__button {
    margin-left: 15px;
  }
}
</style>

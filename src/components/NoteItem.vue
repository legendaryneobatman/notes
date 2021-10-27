<template>
  <div>
    <div
        class="note__item"
        v-if="noteStatus"
    >
      <div
          class="note__text"
          :class="[$store.state.note.isDark ? 'note__text--dark note__body--dark note__text--dark'  : '']"
      >
        <div class="note__header">
          <h2 class="note__title">{{ note.title }}</h2>
          <div class="note__icons">
            <button
                @click="setEdit"
            >
              <fa

                  icon="edit"
                  style="pointer-events: none"
              ></fa>
            </button>
          </div>
        </div>
        <p class="note__body">{{ note.body }}</p>
      </div>

    </div><!-- ----------------------- text ----------------------- -->
    <div
        class="note__item"
        v-else
    >
      <div class="note__form">
        <div
            class="note__header"
        >
          <input
              v-model="noteEdit.title"
              class="note__input"
              type="text"
              placeholder="Заголовок"
          />
          <div class="note__icons">
            <fa
                @click="onSubmit"
                icon="check"
            ></fa>
          </div>
        </div>
        <my-input
            v-model="noteEdit.body"
            class="note__input"
        ></my-input>
      </div>
    </div><!-- ----------------------- form ----------------------- -->
  </div>

</template>

<script>


import MyInput from "./UI/MyInput";

export default {
  components: {MyInput},
  props: {
    note: {
      type: Object,
    },
  },
  data() {
    return {
      noteStatus: true,
      noteEdit: {
        id: null,
        title: '',
        body: '',
      },
      isDark: false,
    }
  },

  methods: {
    setEdit() {
      this.noteStatus = false;
      document.addEventListener('click', this.outsideClickListener)

    },
    onSubmit() {
      this.noteStatus = true;
      this.$emit('updateNoteEdit', this.noteEdit)
    },
    outsideClickListener(event) {
      const target = event.target;
      if (this.$el.contains(target) == false && !this.noteStatus) {
        console.log(this.$el.contains(target));
        this.onSubmit();

      }

    },
  },
  watch: {
    noteEdit: {
      handler() {
        this.noteEdit.id = this.note.id
        this.noteEdit.title = this.note.title
        this.noteEdit.body = this.note.body
      },
      immediate: true
    }
  },


}
;
</script>

<style lang="scss" scoped>
.note__item {
  display: grid;
  grid-template-rows: 1fr auto;
  break-inside: avoid;
  padding-bottom: 0.7em;

    .note__header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 1rem;
    }


}


/* note text*/

.note__text {
  padding: 1rem;
  background-color: white;
  border-radius: 20px;
  border: 0.5px solid #adadad;
}

.note__text--dark {
  background-color: black;
}

.note__text--dark {
  color: white;
}

.note__body--dark {
  color: #adadad;
}

.note__title {
  padding: 0px 10px;
  border: 0.5px solid #adadad;
  border-radius: 0 0 0 0;
  font-size: 20px;
}


.note__body {
  border: 0.5px solid #adadad;
  border-radius: 0 0 0 0;
}

/* note form*/
.note__form {
  justify-content: space-between;
  padding: 10px;
  background-color: blue;
  border-radius: 20px;
  border: 0.5px solid #adadad;
}

.note__input {
  width:  100%;
  border: 0.5px solid #adadad;
  border-radius: 0 0 0 0;
  margin-bottom: 10px;
}

.note__textArea {
  width:  100%;
  border: 0.5px solid #adadad;
  border-radius: 0 0 0 0;
}
</style>


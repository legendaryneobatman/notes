<template>
  <div class="header">
    <input
        class="header__input"
        type="search"
        placeholder="Search for notes"
    />
  </div>
  <!-- header -->
  <section class="section">
    <note-form @create="createNote"></note-form>
    <note-list :notes="notes"></note-list>


    <note-button></note-button>
  </section>
  <!-- BODY OF APP containes note list and form -->
</template>

<script>
import NoteButton from '@/components/NoteButton.vue'
import NoteList from '@/components/NoteList.vue'
import NoteForm from "@/components/NoteForm.vue";

export default {
  components: {
    NoteForm,
    NoteButton,
    NoteList
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
    }
  },
};
</script>

<style>
html {
  overflow: hidden;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.section {
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #c4c4c4;
}

/*Note */









/* header */
.header {
  display: flex;
  box-sizing: border-box;
  background-color: white;
  height: 70px;
}

.header__input {
  flex: 2;
  margin: 20px 37px;
  padding-left: 10px;
  padding-right: 10px;

  vertical-align: middle;

  height: 30px;
  background: #c4c4c4;
  border: 2px solid #adadad;
  box-sizing: border-box;
  border-radius: 30px;

  color: white;
  font-family: "Georama", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
}

::placeholder {
  color: white;
}
</style>

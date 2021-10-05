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
    <form @submit.prevent class="note">
      <div>
        <input
            :value="title"
            @input="inputTitle"
            class="note__input"
            type="text"
            placeholder="Заголовок"
        />
        <textarea
            :value="body"
            @input="inputBody"
            class="note__textArea"
            name="" id=""
            placeholder="Текст заметки"
        ></textarea>
        <button @click="createNote" class="form__button">create</button>
        <input
        >
      </div>
    </form><!-- note-form -->
    <note-list :notes="notes"></note-list>


    <note-button></note-button>
  </section>
  <!-- BODY OF APP containes note list and form -->
</template>

<script>
import NoteButton from '@/components/NoteButton.vue'
import NoteList from '@/components/NoteList.vue'

export default {
  components: {
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
      title: "",
      body: "",
    };
  },
  methods: {
    setTitle(value, item) {
      item.title = value;
    },
    createNote() {
      this.notes.push({id: Date.now(), title: this.title, body: this.body})
    },
    inputTitle(event) {
      this.title = event.target.value
    },
    inputBody(event) {
      this.body = event.target.value
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
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  background-color: #c4c4c4;
}

/*Note */
.note {
  display: flex;

  width: 204px;
  height: 204px;
  border-radius: 20px;
  border: 2px solid #adadad;
  background-color: white;
  padding: 20px;
  margin: 20px;

  color: black;
  font-family: "Georama", sans-serif;
  background-color: white;
}

.note__input {
  border-radius: 15px 15px 0 0;
  border: 2px solid #e40000;
  width: 156px;


  text-align: center;
  font-family: "Georama", sans-serif;
  font-size: 15px;
}

.note__textArea {
  display: flex;
  width: 156px;


  resize: none;
  outline: none;
  overflow: hidden;
  border-radius: 0 0 15px 15px;
  border: 2px solid #fc0000;

  padding: 5px;
  margin: 10px 0 20px 0;

  text-align: center;
  font-family: "Georama", sans-serif;
  font-size: 15px;
}

.form__button {
  width: 156px;
  height: 20px;
  border: 2px solid #fc0000;
  border-radius: 5px;
  background-color: #c4c4c4;

  text-align: center;
  font-family: "Georama", sans-serif;
  font-size: 12px;
  color: white;
}


.note__headliner {
  border-radius: 15px 15px 0 0;
  border: 2px solid #adadad;

  text-align: center;
  font-family: "Georama", sans-serif;
  font-size: 15px;
}

.note__text {
  border-radius: 0 0 15px 15px;
  border: 2px solid #adadad;

  text-align: center;
  font-family: "Georama", sans-serif;
  font-size: 12px;

}

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

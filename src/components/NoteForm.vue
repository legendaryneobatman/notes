<template>
  <form @submit.prevent class="note">
    <div>
      <my-imput
          v-model="note.title"
      />
      <my-input
          v-model="note.body"
      />
      <button
          @click="createNote"
          class="form__button"
      >create</button>
    </div>
  </form><!-- note-form -->
</template>

<script>
import MyInput from "./UI/MyInput";
export default {
  name: "note-form",
  components: {MyInput},
  props: {
    notes: {type: Array, required: true}
  },
  data() {
    return {}
  },
  methods: {
    createNote() {
      this.note.id = Date.now();
      this.$emit("create", this.note);
      this.post = {
        title: "",
        body: "",
      };
      console.log(this.note);
    },
  },
}

</script>

<style scoped>
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
}

.note__input {
  border-radius: 15px 15px 0 0;
  border: 2px solid #e40000;
  width: 156px;
  overflow: auto;


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


</style>

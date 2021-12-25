<template>
  <div>
    <button
        class="button"
        @click="createNote"
    >+</button>
  </div>
</template>

<script>
export default {
  name: "note-button",
  methods: {
    createNote() {
      this.$store.dispatch('note/addNote')
      
    },
  }

};
</script>

<style scoped>
.button {
  position: fixed;
  top: 90%;
  left: 94%;
  width: 50px;
  height: 50px;
  font-size: 40px;
  border-radius: 25px;
  box-sizing: border-box;
  border: none;
  background: rgb(253, 201, 30);
  color: white;
  transition: background 2s linear;

}

button:hover {
  background: rgb(63, 94, 251);
  background: linear-gradient(
      90deg,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
  );
}
</style>

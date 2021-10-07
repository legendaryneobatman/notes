<template>
  <div class="note__item">
    <h2 class="note__headliner">{{ note.title }}</h2>
    <p class="note__text">{{ note.body }}</p>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    }
  }
};
</script>

<style scoped>
.note__item {
  display: flex;
  flex-direction: column;
  flex: 1 1;
  width: 204px;
  height: 204px;
  border-radius: 20px;
  border: 2px solid #adadad;
  background-color: white;
  padding: 20px;
  margin: 20px;
}

.note__headliner {
  height: 20%;

  border-radius: 15px 15px 0 0;
  border: 2px solid #adadad;

  text-align: center;
  font-family: "Georama", sans-serif;
  font-size: 15px;
  overflow: auto;
  margin-bottom: 10px;
}

.note__text {
  height: 80%;

  border-radius: 0 0 15px 15px;
  border: 2px solid #adadad;

  overflow: hidden;
  text-align: center;
  font-family: "Georama", sans-serif;
  font-size: 12px;
}
</style>


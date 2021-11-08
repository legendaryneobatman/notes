<template>
  <div
      class="note-item"
  >
    <div class="note__form">
      <div
          class="note__header"
      >
        <my-input

            type="text"
            placeholder="Заголовок"
        />
        <div class="note-icons">
          <fa
              class="note-icons__item"

              icon="check"
          />
        </div>
      </div>
      <my-input

      ></my-input>
    </div>
  </div>
</template>

<script>
import MyInput from "./UI/MyInput";
export default {
  name: "note-form",
  components: {MyInput},
}

</script>

<style scoped>

</style>

<template>
  <div class="my-text-area">
    <input
        :value="modelValue"
        @input="updateInput"
        class="my-text-area__field"
        type="text"
        placeholder="Тело заметки"
    />
  </div>
</template>

<script>
export default {
  name: "my-text-area",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
}
</script>

<style lang="scss" scoped>
.my-text-area {
  position: relative;
  width: 100%;
  &__field{
    font-size: 16px;
    padding: 10px;
    margin: 10px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    overflow: hidden;
    &:focus{
      outline: none;
    }
  }
}


.input::placeholder:focus {
  color: transparent;
}

</style>

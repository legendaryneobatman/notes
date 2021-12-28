<template>
  <div class="my-input">
    <input
        :value="modelValue"
        @input="updateInput"
        class="my-input__field"
        type="text"
        placeholder="Заголовок"
    />
  </div>
</template>

<script>
export default {
    name: "my-input",
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
.my-input {
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

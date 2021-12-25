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
    display: block;

    width: 100%;
    padding: 10px;

    font-size: 16px;
    border: none;
    border-bottom: 1px solid #c4c4c4;
    &:focus{
      outline: none;
    }
   }
}


.input::placeholder:focus {
    color: transparent;
}

</style>

<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
        placeholder="Заголовок"
    />
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

<style scoped>

.input {
  display: block;
  border: 1px solid #c4c4c4;
  border-radius: 25px;
  margin-bottom: 10px;
  padding: 0.5em;
  text-align: center;
  width: 100%;

}
.input::placeholder:focus {
    color: transparent;
}

</style>

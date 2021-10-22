<template>
  <div class="custom-input">
    <textarea
        :value="modelValue"
        :type="type"
        :required="required"
        class="custom-input__field"
        :class="[ modelValue ? 'custom-input__field--not-empty' : '' ]"
        @input="updateInput"
    />
    <span class="custom-input__separator"></span>
    <label class="custom-input__label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: 'CustomTextArea',
  props: {
    modelValue: {
      type: [String, Number],
      default: () => ''
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: () => 'text'
    },
    required: {
      type: Boolean,
      default: () => false,
    }
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-input {
  position: relative;
  width: 100%;

  &__field {
    font-size: 16px;
    padding: 10px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #ccc;
    resize: vertical;

    &:focus {
      outline: none;
    }
  }

  &__field:focus ~ &__label, &__field--not-empty ~ &__label {
    top: -10px;
    font-size: 14px;
    color: black;
    opacity: 0;
  }

  &__label {
    color: #999;
    font-size: 18px;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 15px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }

  &__separator {
    position: relative;
    display: block;
    width: 100%;

    &:before {
      left: 50%;
    }

    &:after {
      right: 50%;
    }

    &:before, &:after {
      content: "";
      height: 2px;
      width: 0;
      bottom: 0;
      position: absolute;
      background: black;
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }
  }

  &__field:focus ~ &__separator:before,
  &__field:focus ~ &__separator:after {
    width: 50%;
  }
}
</style>

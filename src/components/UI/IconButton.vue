<template>
  <button :type="type" class="icon-button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "IconButton",
  props: {
    type: String,
    default: () => 'button'
  },
}
</script>

<style lang="scss" scoped>
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background: transparent;
  color: black;
  border: 1px solid gray;
  border-radius: 100%;
  cursor: pointer;
  width: 30px;
  height: 30px;

  &:hover {
    border: 1px solid #404040;
  }

  transition: all ease-in-out .3s;
}
</style>

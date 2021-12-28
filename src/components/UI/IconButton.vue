<template>
  <button class="icon-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "icon-button"
}
</script>

<style lang="scss"  scoped>
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;

  padding: 5px;
  width: 20px;
  height: 20px;

  cursor: pointer;
  &:hover {
    border: 1px solid black;
  }

}
</style>

<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button",
}
</script>

<style scoped>
  .btn {
    box-sizing: border-box;
    width: 100px;
    height: 100px;
    background-color: black;
    color: white;
  }
</style>

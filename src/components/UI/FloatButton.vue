<template>
  <button class="float-button">
    <slot/>
  </button>
</template>

<script>
export default {
  name: "FloatButton"
}
</script>

<style lang="scss" scoped>
.float-button {
  position: fixed;
  top: 90%;
  left: 94%;
  width: 50px;
  height: 50px;
  font-size: 40px;
  border-radius: 25px;
  box-sizing: border-box;
  border: none;
  background: rgb(253, 201, 30);
  color: white;
  transition: background 2s linear;

  &:hover {
    background: rgb(63, 94, 251);
    background: linear-gradient(
            90deg,
            rgba(63, 94, 251, 1) 0%,
            rgba(252, 70, 107, 1) 100%
    );
  }
}
</style>

<template>
  <div class="kebab">
    <ul class="dropdown">
      <li></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyBurgerMenu"
}
</script>

<style lang="scss" scoped>
  .kebab {
    cursor: pointer;
    position: relative;
    display: block;
    padding: 0 16px;
    top: 12px;

  }
</style>

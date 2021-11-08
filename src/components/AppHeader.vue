<template>
  <header class="header">
    <div class="header-icons">
      <fa class="header-icons__icon" icon="sticky-note"/>
      <fa class="header-icons__icon" icon="check-square"/>
    </div>

  </header>
</template>

<script>
export default {
  name: "app-header"
}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  .header-icons {
    &__icon {
      color: $grey-dark;
      margin: 5px;
      width: 50px;
      height: 50px;
    }
  }
}
</style>

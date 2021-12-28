<template>
  <div class="kebab" @click="toggleActive">
    <fa class="kebab-icon" icon="ellipsis-v"/>
    <ul
        class="dropdown"
        :class="{ inactive:isActive }"
    >
      <li>
        <a
            @click="deleteNote"
        >Delete</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "burgerMenu",
  props:{
    note:{
      type:Object,
    }
  },
  data(){
    return{
      isActive:true
    }
  },
  methods:{
    deleteNote(){
      this.$store.dispatch('note/deleteNote', this.note)
    },
    toggleActive(){
      this.isActive = !this.isActive;
    },
  },
}
</script>

<style lang="scss" scoped>
  .kebab {
    cursor: pointer;
    position: relative;
    display: block;
    top: 0;
    left: 97%;
    width: 24px;
    height: 24px;
    border: 1px solid black;
    border-radius: 50%;
    font-size: 16px;
    &-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    .dropdown {
      position: absolute;
      left: 0;
      top: 50px;
      transform: translate(-50%, -50%);
      z-index: 2;
      border: 1px solid $grey-light;
      background-color: $grey-dark;

      li {
        display: block;
        width: 100%;
      }
      a {
        width: 100%;
        padding: 0.5em 10px;
        display: inline-block;
        white-space: pre;
        &:hover {
          background: lighten($font-grey, 30%);
        }
      }
      &.inactive {
        display: none;
        transform: scale(1);
        transition: all 0.25s cubic-bezier(.5,1.8,.9,.8);
      }
    }
  }
</style>

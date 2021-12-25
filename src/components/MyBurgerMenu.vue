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
    left: 100%;
    width: 5px;
    height: 5px;
    &_icon {
      width: 6px;
      height: 6px;
      border-radius: 5px;
      background: $font-black;
      margin: 3px 0;
    }
    .dropdown {
      position: absolute;
      left: 0;
      z-index: 2;
      top: 1em;
      background-color: #fff;
      li {
        display: block;
        width: 100%;
      }
      a {
        width: 100%;
        padding: 1em 18px;
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

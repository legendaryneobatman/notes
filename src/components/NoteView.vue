<template>
  <div
      class="note-view"
  >
    <div class="note-view__header">
      <h2 class="note-view__title">{{ note.title }}</h2>
      <div class="note-view__icons">
        <icon-button
            @click="$emit('toggleEdit')"
        >
          <fa
              icon="edit"
          />
        </icon-button>
      </div>
    </div>
    <p
        class="note-view__body"
        :class="[isDark ? 'note-view__body--dark'  : '']"
    >
      {{ note.body }}
    </p>
  </div>
</template>

<script>
import IconButton from "./UI/IconButton";
export default {
  name: 'NoteView',
  components: {IconButton},
  props: {
    note: {
      type: Object,
      required: true
    }
  },
  computed: {
    isDark() {
      return this.$store.state.note.isDark
    }
  },
}
</script>

<style lang="scss" scoped>
.note-view {
  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }

  &__title {
    font-size: 20px;
  }

  &__body {
    &--dark {
      color: #adadad;
    }
  }
}
</style>

<template>
    <app-header>asd</app-header>
    <note-form>
        <note-item></note-item>
    </note-form>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import NoteItem from "@/components/NoteItem.vue";
import NoteForm from "@/components/NoteForm.vue";
export default {
  components: {
    NoteItem,
    NoteForm,
    AppHeader,
  }
};
</script>

<style>
html {
  overflow: hidden;
}
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
</style>

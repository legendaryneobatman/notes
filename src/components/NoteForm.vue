<template>
    <section class="section">
        <note-item></note-item>
        <note-button></note-button>
    </section>
</template>

<script>
import NoteButton from './NoteButton.vue';
import NoteItem from "./NoteItem.vue";
export default {
    components: { NoteItem, NoteButton },
    name: "note-form",
};
</script>

<style scoped>
.section {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100vh;
    background-color: #c4c4c4;
}
</style>

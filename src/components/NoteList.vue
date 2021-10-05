<template>
    <div class="note__list" v-for="note in notes" :key="note.id">

        <!-- note item -->
    </div>
    <!-- note list -->
</template>

<script>

export default {
    name: "note-list",
    props:{
        notes: {
            type:Array,
            required:true,
        }
    }
};
</script>

<style scoped>

</style>

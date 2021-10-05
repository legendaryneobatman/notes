<template>
    <div class="note__item">
        <h2 class="note__headliner">{{ note.title }}</h2>
        <p class="note__text">{{ note.body }}</p>
    </div>
</template>

<script>
export default {};
</script>

<style  scoped>
.note__item {
    width: 204px;
    height: 204px;
    border-radius: 20px;
    border: 2px solid #adadad;
    background-color: white;
    padding: 20px;
    margin: 20px;
}
.note__headliner{
    min-height: 22.18px;
    margin-bottom: 10px;
}
.note__text{
    min-height: 22.18px;
}
</style>
vb

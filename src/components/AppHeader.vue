<template>
    <div class="header">
        <input class="input" type="search" placeholder="Search for notes" />
    </div>
</template>

<script>
export default {
    name: "notes-header",
};
</script>

<style scoped>
.header {
    display: flex;
    box-sizing: border-box;
    background-color: white;
    height: 70px;
}
.input {
    flex: 2;
    margin: 20px 37px;
    padding-left: 10px;
    padding-right: 10px;

    vertical-align: middle;

    height: 30px;
    background: #c4c4c4;
    border: 2px solid #adadad;
    box-sizing: border-box;
    border-radius: 30px;

    color: white;
    font-family: 'Georama', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
}
::placeholder {
    color: white;
}
</style>

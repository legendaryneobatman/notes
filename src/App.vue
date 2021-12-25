<template>
  <div class="app" id="app">
    <app-header/>
    <note-list/>
    <note-button/>
  </div>
</template>

<script>
import NoteButton from '@/components/NoteButton.vue'
import NoteList from '@/components/NoteList.vue'
import AppHeader from "./components/AppHeader";

export default {
  components: {
    AppHeader,
    NoteButton,
    NoteList,
  },
  data() {
    return {}
  },
  methods: {},

};
</script>

<style lang="scss">

:root {
  --app-background-color: #FFFFFF;
  --dynamic-title-color: #363636;
  --dynamic-subtitle-color: #4a4a4a;
}

[theme="dark"] {
  --app-background-color: #000000;
  --dynamic-title-color: #FFFFFF;
  --dynamic-subtitle-color: #e0e0e0;
}

html {

  background-color: #e0e0e0;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.app {
  background-color: $grey-light;
}
</style>

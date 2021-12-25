export const note = {
  namespaced: true,
  state: () => ({
    notes:[],
    noteEdit:{id:Date.now(), title:'noteEdit.title', body:'noteEdit.title', noteStatus:false},
  }),
  getters: {

  },
  mutations: {
    ADD_NOTE(state, note) {
      state.notes.push(note);
    },
    UPDATE_NOTE(state, note) {
      const index = state.notes.findIndex(item => item.id === note.id);
      state.notes[index] = note;
    },
    UPDATE_NOTE_FORM_TITLE(state, payload){
      const index = state.notes.findIndex(item => item.id === payload.note.id)
      /* eslint-disable no-console */
      state.notes[index].title=payload.event.target.value
      //console.log(state.notes[index].title, event.target.value)
    },
    UPDATE_NOTE_FORM_BODY(state, payload){
      const index = state.notes.findIndex(item => item.id === payload.note.id)
      /* eslint-disable no-console */
      state.notes[index].body=payload.event.target.value
      //console.log(state.notes[index].title, event.target.value)
    },
    DELETE_NOTE(state, note) {
      const index = state.notes.findIndex(item => item/*.id*/ === note/*.id*/);
      state.notes.splice(index, 1)
      /* eslint-disable no-console */
      console.log('sss')
      /* eslint-disable no-console */
    },
    CHANGE__NOTE_STATUS(state, note) {
      const index = state.notes.findIndex(item => item.id === note.id);
      state.notes[index].noteStatus = !state.notes[index].noteStatus
    }
  },
  actions: {
    addNote({ commit }) {
      commit("ADD_NOTE", {
        id:Date.now(), title:'Заголовок заметки', body:'Тело заметки', noteStatus:false
      });
    },
    updateNote({ commit, }, note) {
      commit("UPDATE_NOTE", note);
    },
    updateNoteFormTitle({commit,}, payload) {
      commit("UPDATE_NOTE_FORM_TITLE", payload);
    },
    updateNoteFormBody({commit,}, payload) {
      commit("UPDATE_NOTE_FORM_BODY", payload);
    },
    deleteNote({commit,}, note) {
      commit('DELETE_NOTE', note)
    },
    changeNoteStatus({commit,}, note) {
      commit('CHANGE__NOTE_STATUS', note)
    }
  }
};

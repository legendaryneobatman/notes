export const note = {
  namespaced: true,
  state: () => ({
    notes: JSON.parse(window.localStorage.getItem('notes')) || [{id:Date.now(), title:'', body:'',}],
    noteStatus: false,
  }),
  getters: {
    NOTES: state => {
      return state.notes
    }
  },
  mutations: {
    ADD_NOTE(state, note) {
      state.notes.push(note);
      /* eslint-disable no-console */
      console.log(state.notes, note)
      /* eslint-disable no-console */
      window.localStorage.setItem('notes', JSON.stringify(state.notes))
    },
    UPDATE_NOTE(state, note) {
      const index = state.notes.findIndex(item => item.id === note.id);
      state.notes[index] = note;
      window.localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    DELETE_NOTE(state, note) {
      const index = state.notes.findIndex(item => item/*.id*/ === note/*.id*/);
      state.notes.splice(index, 1)
      /* eslint-disable no-console */
      console.log('sss')
      /* eslint-disable no-console */
    },
    CHANGE__NOTE_STATUS(state) {
      state.noteStatus = !state.noteStatus
    }
  },
  actions: {
    addNote({ commit }) {
      commit("ADD_NOTE", {
        id: Date.now(),
        title: "",
        body: "",
      });
    },
    updateNote({ commit, }, note) {
      commit("UPDATE_NOTE", note);
    },
    deleteNote({commit,}, note) {
      commit('DELETE_NOTE', note)
    },
    changeNoteStatus({commit,}, noteStatus) {
      commit('CHANGE__NOTE_STATUS', noteStatus)
    }
  }
};

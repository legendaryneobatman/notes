export const note = {
  namespaced: true,
  state: () => ({
    isDark: false,
    notes: [
      {id: 1, title: "Javascript 1", body: "Описание поста 1"},
      {id: 2, title: "Javascript 2", body: "Описание поста 2"},
      {id: 3, title: "Javascript 3", body: "Описание поста 3"},
    ]
  }),
  getters: {
    getNotes: state => search => {
      if (search) {
        const str = search.toLowerCase()
        return state.notes.filter((note) => (
                note.title.toLowerCase().startsWith(str) || note.body.toLowerCase().startsWith(str))
            )
      }
      return state.notes
    }
  },
  mutations: {
    SET_IS_DARK(state, isDark) {
      state.isDark = isDark;
    },
    ADD_NOTE(state, note) {
      state.notes.push(note)
    },
    UPDATE_NOTE(state, note) {
      const index = state.notes.findIndex((item) => item.id === note.id)
      if (index >= 0) {
        state.notes[index] = note
      }
    }
  },
  actions: {
    toggleTheme({ commit, state }) {
      commit("SET_IS_DARK", !state.isDark);
    },
    addNote({ commit }, note) {
      commit('ADD_NOTE', note)
    },
    updateNote({ commit }, note) {
      commit('UPDATE_NOTE', note)
    }
  }
};

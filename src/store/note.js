export const note = {
  namespaced: true,
  state: () => ({
    isDark: false
  }),
  getters: {},
  mutations: {
    SET_IS_DARK(state, isDark) {
      state.isDark = isDark;
    }
  },
  actions: {
    toggleTheme({ commit, state }) {
      commit("SET_IS_DARK", !state.isDark);
    }
  }
};

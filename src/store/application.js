export const application = {
    namespaced: true,
    state: () => ({
        isDark: false,
    }),
    mutations: {
        SET_IS_DARK(state, isDark) {
            state.isDark = isDark;
        },
    },
    actions: {
        toggleTheme({ commit, state }) {
            commit("SET_IS_DARK", !state.isDark);
        },
    }
}


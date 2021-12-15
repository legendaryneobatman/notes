export const localNotes = {
    namespaced:true,
    state: () => ({
        notes: [
            { id: 1, text: '...', done: true },
            { id: 2, text: '...', done: false },
        ]
    }),
    mutations: {
        setNotes(state, notes) {
            this.notes = notes;
        }
    },
    actions: {},
}

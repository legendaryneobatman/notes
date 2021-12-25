export const LocalStorage = (store) => {
    store.subscribe(() => {
        window.localStorage.setItem("notes", JSON.stringify(store.state.note.notes));
    })
}

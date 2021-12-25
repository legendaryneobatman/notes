export const LocalStorage = (store) => {
    store.state.note.notes=(
        JSON.parse(window.localStorage.getItem('notes')) ||
        [
            {id:Date.now(), title:'Заголовок заметки', body:'Тело заметки', noteStatus:false}
        ]

    );
    store.subscribe(() => {
        window.localStorage.setItem("notes", JSON.stringify(store.state.note.notes));
    })
}

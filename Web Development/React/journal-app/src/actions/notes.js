import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const starteNewNote = () => {
    return async ( dispatch, getState ) => {
        const { auth: {uid} } = getState();
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        };

        const docRef = await db.collection(`${ uid }/journal/notes`).add(newNote);
        dispatch(activeNote(docRef.id, newNote));
    };  
};

export const activeNote = (id, note) => ({
    type: types.noteActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    };
};

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});
// REDUCER
export default function notes(state=[], action) {
    switch(action.type) {
        case 'NOTES_CREATE':
            return [...state, action.note];
        case 'DELETE_NOTE':
            delete state[action.index];
            return [...state];
        case 'NOTES_UPDATE':
            state[action.index] = action.note
            return [...state];
        default:
            return state;
    }
}

// ACTION
export const createNote = (note) => (dispatch) => {
    dispatch({
        type: 'NOTES_CREATE',
        note
    })
}

export const updateNote = (index, note) => (dispatch, getState) => {
    dispatch({
        type: 'NOTES_UPDATE',
        index,
        note
    })
}

export const deleteNote = (index) => (dispatch, getState) => {
    dispatch({
        type: 'NOTES_DELETE',
        index
    })
}
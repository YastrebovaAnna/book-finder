import {useContext} from "react";
import {BookContext} from "../context/BookContext.jsx";
import {ACTIONS} from "../data/data.js";
import {generateId} from "../utils/generateId";

const useBookActions = () => {
    const {dispatch} = useContext(BookContext);

    const addBook = (title) => {
        dispatch({
            type: ACTIONS.ADD_BOOK,
            payload: {
                id: generateId(),
                title: title.trim(),
                read: false,
            },
        });
    };

    const toggleReadStatus = (id) => {
        dispatch({type: ACTIONS.TOGGLE_READ, payload: id});
    };

    const deleteBook = (id) => {
        dispatch({type: ACTIONS.DELETE_BOOK, payload: id});
    };

    const editBook = (id, title) => {
        dispatch({type: ACTIONS.EDIT_BOOK, payload: {id, title}});
    };

    const clearBooks = () => {
        dispatch({type: ACTIONS.CLEAR_BOOKS});
    };

    const markAllAsRead = () => {
        dispatch({type: ACTIONS.MARK_ALL_AS_READ});
    };

    return {
        addBook,
        toggleReadStatus,
        deleteBook,
        editBook,
        clearBooks,
        markAllAsRead
    };
};

export {useBookActions};

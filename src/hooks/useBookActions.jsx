import {useContext} from "react";
import {BookContext} from "../context/BookContext.jsx";

const useBookActions = () => {
    const {dispatch} = useContext(BookContext);

    const addBook = (title) => {
        dispatch({
            type: "ADD_BOOK",
            payload: {
                id: Date.now(),
                title: title.trim(),
                read: false,
            },
        });
    };

    const toggleReadStatus = (id) => {
        dispatch({
            type: "TOGGLE_READ",
            payload: id,
        });
    };

    const deleteBook = (id) => {
        dispatch({
            type: "DELETE_BOOK",
            payload: id,
        });
    };

    const editBook = (id, title) => {
        dispatch({
            type: "EDIT_BOOK",
            payload: { id, title },
        });
    };

    return {addBook, toggleReadStatus, deleteBook, editBook};
};

export {useBookActions};

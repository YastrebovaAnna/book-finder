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

    return {addBook, toggleReadStatus};
};

export {useBookActions};

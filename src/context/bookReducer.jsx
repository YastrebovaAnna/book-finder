import {ACTIONS} from "../data/data.js";

const bookReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.TOGGLE_READ:
            return state.map((book) =>
                book.id === action.payload
                    ? {...book, read: !book.read}
                    : book
            );
        case ACTIONS.ADD_BOOK:
            return [...state, action.payload];
        case ACTIONS.DELETE_BOOK:
            return state.filter((book) => book.id !== action.payload);
        case ACTIONS.EDIT_BOOK:
            return state.map((book) =>
                book.id === action.payload.id
                    ? {...book, title: action.payload.title}
                    : book
            );
        case ACTIONS.CLEAR_BOOKS:
            return [];
        case ACTIONS.MARK_ALL_AS_READ:
            return state.map((book) => ({...book, read: true}));
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

export {bookReducer}
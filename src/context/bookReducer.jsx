const bookReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_READ":
            return state.map((book) =>
                book.id === action.payload
                    ? {...book, read: !book.read}
                    : book
            );
        case "ADD_BOOK":
            return [...state, action.payload];
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};

export {bookReducer}
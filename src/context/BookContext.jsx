import {createContext, useReducer} from "react";
import PropTypes from "prop-types";
import {bookReducer} from "./bookReducer";
import {initialBooks} from "../data/initialBooks.js";

const BookContext = createContext();

export const BookProvider = ({children}) => {
    const [state, dispatch] = useReducer(bookReducer, initialBooks);

    return (
        <BookContext.Provider value={{books: state, dispatch}}>
            {children}
        </BookContext.Provider>
    );
};

BookProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {BookContext};

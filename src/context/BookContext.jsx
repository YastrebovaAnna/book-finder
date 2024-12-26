import {createContext, useReducer} from "react";
import PropTypes from "prop-types";
import {bookReducer} from "./bookReducer";

const BookContext = createContext();

const BookProvider = ({children}) => {
    const [state, dispatch] = useReducer(bookReducer, []);

    return (
        <BookContext.Provider value={{books: state, dispatch}}>
            {children}
        </BookContext.Provider>
    );
};

BookProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export {BookContext, BookProvider};

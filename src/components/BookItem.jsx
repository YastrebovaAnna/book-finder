import {useContext} from "react";
import {BookContext} from "../context/BookContext";
import PropTypes from "prop-types";

const BookItem = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return (
        <div className={`book-item ${book.read ? "read" : "unread"}`}>
            <span className="book-title">{book.title}</span>
            <div className="book-actions">
                <button onClick={() => dispatch({type: "TOGGLE_READ", payload: book.id})}>
                    {book.read ? "Mark as Unread" : "Mark as Read"}
                </button>
            </div>
        </div>
    );
};

BookItem.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired,
    }).isRequired,
};

export default BookItem;

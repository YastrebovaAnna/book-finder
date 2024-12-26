import {useBookActions} from "../hooks/useBookActions";
import PropTypes from "prop-types";

const BookItem = ({book}) => {
    const {toggleReadStatus, deleteBook} = useBookActions();

    return (
        <div className={`book-item ${book.read ? "read" : "unread"}`}>
            <span className="book-title">{book.title}</span>
            <div className="book-actions">
                <button onClick={() => toggleReadStatus(book.id)}>
                    {book.read ? "Mark as Unread" : "Mark as Read"}
                </button>
                <button onClick={() => deleteBook(book.id)} className="delete-button">
                    Delete
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

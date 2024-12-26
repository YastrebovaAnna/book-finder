import {useBookActions} from "../hooks/useBookActions";
import PropTypes from "prop-types";
import {useState} from "react";

const BookItem = ({book}) => {
    const {toggleReadStatus, deleteBook, editBook} = useBookActions();
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(book.title);

    const handleEdit = () => {
        setIsEditing(false);
        if (newTitle.trim()) {
            editBook(book.id, newTitle.trim());
        }
    };
    return (
        <div className={`book-item ${book.read ? "read" : "unread"}`}>
            {isEditing ? (
                <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    onBlur={handleEdit}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") handleEdit();
                    }}
                    autoFocus
                />
            ) : (
                <span className="book-title" onDoubleClick={() => setIsEditing(true)}>
                    {book.title}
                </span>
            )}
            <div className="book-actions">
                <button onClick={() => toggleReadStatus(book.id)}>
                    {book.read ? "Mark as Unread" : "Mark as Read"}
                </button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
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

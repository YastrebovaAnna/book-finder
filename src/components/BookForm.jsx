import PropTypes from "prop-types";

const BookForm = ({title, setTitle, onSubmit}) => {
    return (
        <form className="add-book-form" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Enter book title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <button type="submit">Add Book</button>
        </form>
    );
};

BookForm.propTypes = {
    title: PropTypes.string.isRequired,
    setTitle: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export {BookForm};

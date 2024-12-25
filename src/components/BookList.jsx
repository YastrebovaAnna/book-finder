import {useContext} from "react";
import {BookContext} from "../context/BookContext";
import BookItem from "./BookItem";
import "../styles/styles.css";

const BookList = () => {
    const {books} = useContext(BookContext);

    return (
        <div className="book-list">
            {books.length ?
                (books.map((book) => <BookItem key={book.id} book={book}/>))
                :
                (<p className="no-books">No books to display.</p>)}
        </div>
    );
};

export {BookList};

import {useState} from "react";
import {useBookActions} from "../hooks/useBookActions.jsx";
import {BookForm} from "./BookForm.jsx";

const AddBook = () => {
    const {addBook} = useBookActions();
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()) {
            addBook(title);
            setTitle("");
        }
    };

    return (
        <div className="add-book">
            <h2>Add a New Book</h2>
            <BookForm title={title} setTitle={setTitle} onSubmit={handleSubmit}/>
        </div>
    );
};

export {AddBook};

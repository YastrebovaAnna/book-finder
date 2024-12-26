import {BookProvider} from "./context/BookContext.jsx";
import {BookList} from "./components/BookList.jsx";
import {AddBook} from "./components/AddBook.jsx";
import {BulkActions} from "./components/BulkActions.jsx";

const App = () => {
    return (
        <BookProvider>
            <div className="app">
                <h1>Book Tracker</h1>
                <AddBook/>
                <BulkActions/>
                <BookList/>
            </div>
        </BookProvider>
    );
};

export default App;

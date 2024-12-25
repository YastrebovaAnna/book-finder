import {BookProvider} from "./context/BookContext.jsx";
import {BookList} from "./components/BookList.jsx";

const App = () => {
    return (
        <BookProvider>
            <div className="app">
                <h1>Book Tracker</h1>
                <BookList/>
            </div>
        </BookProvider>
    );
};

export default App;

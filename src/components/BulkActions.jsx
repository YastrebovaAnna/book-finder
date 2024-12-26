import {useBookActions} from "../hooks/useBookActions.jsx";

const BulkActions = () => {
    const { clearBooks, markAllAsRead } = useBookActions();

    return (
        <div className="bulk-actions">
            <button onClick={markAllAsRead}>Mark All as Read</button>
            <button onClick={clearBooks}>Clear All Books</button>
        </div>
    );
};

export { BulkActions };
import AddBook from "./components/AddBook";
import BookList from "./components/BookList";

function App() {
  return (
    <div id="main">
      <h1>Book's list</h1>
      <AddBook />
      <BookList />
    </div>
  );
}

export default App;

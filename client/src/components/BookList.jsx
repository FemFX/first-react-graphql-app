import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

const BookList = (props) => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) {
    return (
      <div>
        <ul id="book-list">
          {data.books.map((book) => (
            <li key={book.id}>
              {book.name} : {book.genre}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default BookList;

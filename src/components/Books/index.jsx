import useBook from "hooks/useBook";
import BookItem from "./BookItem";

const BooksListing = () => {
  const { books } = useBook();

  return (
    <section className="main__container mt-lg">
      <h2 className="h-title mb-sm">Book Listing</h2>
      <section className="books__container mb-sm">
        <ul>
          {books.length > 0 ? (
            books.map((book, index) => {
              return (
                <BookItem
                  key={book.title + book.id}
                  index={index}
                  book={book}
                />
              );
            })
          ) : (
            <li>No Books in Library Yet</li>
          )}
        </ul>
      </section>
    </section>
  );
};

export default BooksListing;

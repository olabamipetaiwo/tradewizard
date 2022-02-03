import { useContext } from "react";
import BookContext from "context/Book/BookContext";

export const useBook = () => {
  const bookContext = useContext(BookContext);
  return bookContext;
};

export default useBook;

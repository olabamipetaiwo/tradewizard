import PropTypes from "prop-types";
import { capitalizeFirstWord } from "utils/common";

const BookItem = ({ book, index }) => {
  return (
    <li className="flex align-center mb-xs">
      <span className="p-title">{index + 1} &nbsp;</span>
      <span className="p-title">{capitalizeFirstWord(book.title)}</span>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
};

export default BookItem;

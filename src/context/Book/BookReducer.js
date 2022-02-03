import {
  SAVE_GENRE,
  SAVE_SUBGENRE,
  ADD_SUBGENRE,
  SAVE_BOOK,
  RESET_FLAG,
} from "../types";

const BookReducer = (state, action) => {
  switch (action.type) {
    case SAVE_BOOK:
      return {
        ...state,
        books: [
          ...state.books,
          {
            id:
              state.books.length > 0
                ? state.books[state.books.length - 1].id + 1
                : 1,
            genre: {
              id: state.newBook.genre.id,
              name: state.newBook.genre.name,
            },
            subgenre: { ...state.newBook.subgenre },
            ...action.payload,
          },
        ],
        newBookCreated: true,
      };
    case SAVE_GENRE:
      return {
        ...state,
        newBook: {
          ...state.newBook,
          genre: { ...action.payload },
        },
      };
    case SAVE_SUBGENRE:
      return {
        ...state,
        newBook: {
          ...state.newBook,
          subgenre: { ...action.payload },
        },
      };
    case ADD_SUBGENRE:
      return {
        ...state,
        newBook: {
          ...state.newBook,
          genre: {
            ...state.newBook.genre,
            subgenres: [...state.newBook.genre.subgenres, action.payload],
          },
        },
      };
    case RESET_FLAG:
      return {
        ...state,
        newBook: {
          genre: null,
          subgenre: null,
        },
        newBookCreated: false,
      };
    default:
      return state;
  }
};

export default BookReducer;

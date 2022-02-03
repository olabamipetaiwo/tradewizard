import {
  SAVE_GENRE,
  SAVE_SUBGENRE,
  ADD_SUBGENRE,
  SAVE_BOOK,
  RESET_FLAG,
} from "../types";

const getUpdatedGenre = (state, payload) => {
  const existingGenres = state.genres.slice();
  const targetGenreIndex = existingGenres.findIndex(
    (genre) => genre.id === state.newBook.genre.id
  );
  const targetGenre = { ...existingGenres[targetGenreIndex] };
  const newSubgenres = [...targetGenre.subgenres, payload];
  targetGenre.subgenres = newSubgenres;
  existingGenres[targetGenreIndex] = targetGenre;
  return existingGenres;
};

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
        subgenres: [...action.payload.subgenres],
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
        genres: getUpdatedGenre(state, action.payload),
        subgenres: [...state.subgenres, action.payload],
      };
    case RESET_FLAG:
      return {
        ...state,
        newBook: null,
        subgenres: [],
        newBookCreated: false,
      };
    default:
      return state;
  }
};

export default BookReducer;

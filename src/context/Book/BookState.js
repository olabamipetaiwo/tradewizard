import React, { useReducer } from "react";
import BookContext from "./BookContext";
import BookReducer from "./BookReducer";
import { GENRES } from "utils/common";

import {
  SAVE_GENRE,
  SAVE_SUBGENRE,
  ADD_SUBGENRE,
  SAVE_BOOK,
  RESET_FLAG,
} from "../types";

const BookState = (props) => {
  const initialState = {
    books: [],
    newBook: {
      genre: null,
      subgenre: null,
    },
    genres: [...GENRES],
    subgenres: [],
    newBookCreated: false,
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);

  const saveBookToCatalogue = async (bookPayload) => {
    dispatch({
      type: SAVE_BOOK,
      payload: bookPayload,
    });
  };

  const saveBookGenre = (genrePayload) => {
    dispatch({
      type: SAVE_GENRE,
      payload: genrePayload,
    });
  };

  const saveBookSubGenre = (subGenrePayload) => {
    dispatch({
      type: SAVE_SUBGENRE,
      payload: subGenrePayload,
    });
  };

  const addGenreSubGenre = (subGenrePayload) => {
    dispatch({
      type: ADD_SUBGENRE,
      payload: subGenrePayload,
    });
  };

  const resetState = () => {
    dispatch({
      type: RESET_FLAG,
    });
  };

  return (
    <BookContext.Provider
      value={{
        books: state.books,
        genres: state.genres,
        subgenres: state.subgenres,
        newBook: state.newBook,
        newBookCreated: state.newBookCreated,
        saveBookGenre,
        saveBookSubGenre,
        addGenreSubGenre,
        saveBookToCatalogue,
        resetState,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;

import React, { useReducer } from "react";
import BookContext from "../context/Book/BookContext";
import BookReducer from "../context/Book/BookReducer";
import {
  searchAllBooks,
  searchFullText,
  getAllBooks,
  getSingleBook,
  createBook,
  updateBook,
  deleteBook,
  promoteBook,
} from "services/BookService";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import {
  FETCH_PUBLIC_BookS,
  FETCH_BookS,
  FETCH_Book,
  UPDATE_Book,
  DELETE_Book,
  Book_ERROR,
  BookS_LOADING,
  UPDATING_Book,
  DELETING_Book,
} from "../context/types";

const BookState = (props) => {
  
  const initialState = {
    Books: null,
    publicBooks: null,
    Book: null,
    fetchingBooks: false,
    fetchingBook: false,
    updatingBook: false,
    deletingBook: false,
  };

  const [state, dispatch] = useReducer(BookReducer, initialState);
  const router = useRouter();

  const setLoading = () => {
    dispatch({
      type: BookS_LOADING,
    });
  };

  const searchPublicBooks = async (searchPayload) => {
    await setLoading();
    try {
      // console.log('provider Calling search public Books with', searchPayload);

      let res = await searchAllBooks(searchPayload);
      dispatch({
        type: FETCH_PUBLIC_BookS,
        payload: res.data,
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const fullTextSearch = async (searchQuery) => {
    await setLoading();
    try {
      let res = await searchFullText(searchQuery);
      dispatch({
        type: FETCH_PUBLIC_BookS,
        payload: res.data,
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const fetchFeaturedBooks = async () => {
    await setLoading();
    try {
      let searchPayload = {
        isPromoted: true,
      };
      let res = await searchAllBooks(searchPayload);
      dispatch({
        type: FETCH_PUBLIC_BookS,
        payload: res.data,
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const fetchAllBooks = async () => {
    await setLoading();
    try {
      let res = await getAllBooks();
      dispatch({
        type: FETCH_BookS,
        payload: res.data,
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const fetchSingleBook = async (BookId) => {
    try {
      let res = await getSingleBook(BookId);
      dispatch({
        type: FETCH_Book,
        payload: res,
      });
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const createNewBook = async (details) => {
    try {
      await createBook(details);
      toast.success("Book created succesfully");
      router.push("/employer/Books");
    } catch (err) {
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const updateSingleBook = async (BookId, details) => {
    await dispatch({
      type: UPDATING_Book,
    });
    try {
      await updateBook(BookId, details);
      await dispatch({
        type: UPDATE_Book,
      });
      let newRoute = `/employer/Books/${BookId}`;
      toast.success("Book updated succesfully");
      router.push(newRoute);
    } catch (err) {
      console.log("error", err);
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const promoteSingleBook = async (BookId, details) => {
    await dispatch({
      type: UPDATING_Book,
    });
    try {
      let response = await promoteBook(BookId, details);
      await dispatch({
        type: UPDATE_Book,
      });
      const paymenLink = response?.data.url;
      window.open(paymenLink, "_top");
      // window.location.replace(paymenLink);
      // router.push(newRoute);
    } catch (err) {
      console.log("error", err);
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  const deleteSingleBook = async (BookId) => {
    await dispatch({
      type: DELETING_Book,
    });
    try {
      await deleteBook(BookId);
      dispatch({
        type: DELETE_Book,
      });
      fetchAllBooks();
    } catch (err) {
      console.log("erro", err);
      console.log("erro esponse", err?.response);
      toast.error(
        err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!"
      );
      dispatch({
        type: Book_ERROR,
        payload:
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          "Error occured!",
      });
    }
  };

  return (
    <BookContext.Provider
      value={{
        Books: state.Books,
        Book: state.Book,
        publicBooks: state.publicBooks,
        fetchingBooks: state.fetchingBooks,
        fetchingBook: state.fetchingBook,
        deletingBook: state.deletingBook,
        updatingBook: state.updatingBook,
        searchPublicBooks,
        fullTextSearch,
        fetchFeaturedBooks,
        fetchAllBooks,
        fetchSingleBook,
        createNewBook,
        promoteSingleBook,
        updateSingleBook,
        deleteSingleBook,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
};

export default BookState;

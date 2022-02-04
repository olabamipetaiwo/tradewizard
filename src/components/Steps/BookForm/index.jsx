import useBook from "hooks/useBook";
import useStep from "hooks/useStep";
import { useFormik } from "formik";
import * as Yup from "yup";

const BookForm = () => {
  const { newBook, saveBookToCatalogue } = useBook();
  const { isAddNewSubGenreActive, changeActiveStep } = useStep();

  const moveStep = () => {
    changeActiveStep(isAddNewSubGenreActive ? 3 : 2);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    await saveBookToCatalogue(values);
    resetForm();
  };

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      isbn: "",
      publisher: "",
      date_published: "",
      no_of_pages: "",
      format: "",
      edition: "",
      edition_language: "",
      description: "",
    },
    validationSchema: BookSchema,
    onSubmit: handleSubmit,
  });

  return (
    <section className="steps__content mb-sm">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <div className="form__group mb-sm ">
            <label>Book Title</label>
            <input
              type="text"
              name="title"
              data-cy="book-title"
              placeholder="Title"
              {...formik.getFieldProps("title")}
            ></input>
            <p className="error"></p>
            {formik.touched.title && formik.errors.title ? (
              <p className="error">{formik.errors.title}</p>
            ) : null}
          </div>
          <div className="form__group mb-sm">
            <label>Author</label>
            <select
              data-cy="book-author"
              name="author"
              {...formik.getFieldProps("author")}
            >
              <option value="">Select Author</option>
              <option value="author_A">Author A</option>
              <option value="author_B">Author B</option>
            </select>
            {formik.touched.author && formik.errors.author ? (
              <p className="error">{formik.errors.author}</p>
            ) : null}
          </div>

          <div className="form__group mb-sm">
            <label>ISBN</label>
            <input
              name="isbn"
              type="text"
              data-cy="book-isbn"
              placeholder="ISBN"
              {...formik.getFieldProps("isbn")}
            ></input>
            {formik.touched.isbn && formik.errors.isbn ? (
              <p className="error">{formik.errors.isbn}</p>
            ) : null}
          </div>
          <div
            className="form__group mb-sm"
            {...formik.getFieldProps("publisher")}
          >
            <label>Publisher</label>
            <select name="publisher" data-cy="book-publisher">
              <option value="">Select Publisher</option>
              <option value="publisher_A">Publisher A</option>
              <option value="publisher_B">Publisher B</option>
            </select>
            {formik.touched.publisher && formik.errors.publisher ? (
              <p className="error">{formik.errors.publisher}</p>
            ) : null}
          </div>
          <div
            className="form__group mb-sm"
            {...formik.getFieldProps("date_published")}
          >
            <label>Date Published</label>
            <input
              name="date_published"
              data-cy="book_date_published"
              type="date"
              placeholder="DD/MM/YYYY"
              className="dateInput"
            ></input>
            {formik.touched.date_published && formik.errors.date_published ? (
              <p className="error">{formik.errors.date_published}</p>
            ) : null}
          </div>
          <div className="form__group mb-sm ">
            <label>No of Pages</label>
            <input
              data-cy="book-pages"
              type="number"
              name="no_of_pages"
              placeholder="Number of Pages"
              {...formik.getFieldProps("no_of_pages")}
            ></input>
            {formik.touched.no_of_pages && formik.errors.no_of_pages ? (
              <p className="error">{formik.errors.no_of_pages}</p>
            ) : null}
          </div>
          <div className="form__group mb-sm ">
            <label>Format</label>
            <select
              data-cy="book-format"
              name="format"
              {...formik.getFieldProps("format")}
            >
              <option value="">Select Format</option>
              <option value="format_A">Format A</option>
              <option value="format_B">Format B</option>
            </select>
            {formik.touched.format && formik.errors.format ? (
              <p className="error">{formik.errors.format}</p>
            ) : null}
          </div>
          <div className="row">
            <div className="row-half form__group mb-sm  ">
              <label>Book Edition</label>
              <input
                type="text"
                name="edition"
                data-cy="book-edition"
                placeholder="Edition"
                {...formik.getFieldProps("edition")}
              ></input>
              {formik.touched.edition && formik.errors.edition ? (
                <p className="error">{formik.errors.edition}</p>
              ) : null}
            </div>
            <div className="row-half form__group mb-sm ">
              <label>Edition Language</label>
              <select
                name="edition_language"
                data-cy="book-edition-language"
                {...formik.getFieldProps("edition_language")}
              >
                <option value="">Edition Language</option>
                <option value="edition_A">Edition A</option>
                <option value="edition_B">Edition B</option>
              </select>
              {formik.touched.edition_language &&
              formik.errors.edition_language ? (
                <p className="error">{formik.errors.edition_language}</p>
              ) : null}
            </div>
          </div>
          {/* {!newBook.subgenre?.isDescriptionRequired && ( */}
          <div className="form__group mb-sm">
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Description"
              {...formik.getFieldProps("description")}
              required={newBook.subgenre?.isDescriptionRequired ? true : false}
              data-cy="book-desc"
            ></textarea>
            {formik.touched.description && formik.errors.description ? (
              <p className="error">{formik.errors.description}</p>
            ) : null}
          </div>
          {/* )} */}
        </div>

        <section className="flex align-center justify-end steps__actions">
          <button onClick={moveStep} className="btn btn-outline mr-sm">
            <span>Back</span>
          </button>
          <button
            type="submit"
            className="btn btn-primary"
            data-cy="add-new-book"
          >
            {formik.isSubmitting ? "Adding Book" : "Add Book"}
          </button>
        </section>
      </form>
    </section>
  );
};

export default BookForm;

const BookSchema = Yup.object().shape({
  title: Yup.string().required("Title is Required"),
  author: Yup.string(),
  isbn: Yup.string().matches(/^[0-9]+$/, "Must be only digits"),
  // .min(13, "Isbn must be exactly thirteen digits")
  // .max(13, "Isbn must be exactly thirteen digits"),
  publisher: Yup.string(),
  date_published: Yup.date().max(new Date(), "Date can't be later than today"),
  no_of_pages: Yup.number().typeError("You must specify a number"),
  format: Yup.string(),
  edition: Yup.string(),
  edition_language: Yup.string(),
  description: Yup.string(),
});

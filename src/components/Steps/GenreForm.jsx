import { useContext, Fragment } from "react";
import toast from "react-hot-toast";
import BookContext from "context/Book/BookContext";
import StepContext from "context/Step/StepContext";
import { capitalizeWord } from "utils/common";

const GenreForm = () => {
  const { newBook, genres, saveBookGenre } = useContext(BookContext);
  const { changeActiveStep } = useContext(StepContext);

  const handleClick = (chosenGenre) => {
    saveBookGenre(chosenGenre);
  };

  const moveStep = () => {
    if (!newBook?.genre) {
      toast.error("You must select a book genre before you proceed");
    } else {
      changeActiveStep(2);
    }
  };

  return (
    <Fragment>
      <section className="steps__content mb-sm">
        <section className="flex flex-wrap">
          {genres.map((item) => {
            return (
              <button
                onClick={handleClick.bind(this, item)}
                key={item.name}
                className={`btn btn-outline mr-xs mb-sm ${
                  item.id === newBook?.genre?.id ? "active" : ""
                }`}
              >
                {capitalizeWord(item.name)}
              </button>
            );
          })}
        </section>

        <section className="flex align-center justify-end steps__actions">
          <button type="button" onClick={moveStep} className="btn btn-primary">
            Next
          </button>
        </section>
      </section>
    </Fragment>
  );
};

export default GenreForm;

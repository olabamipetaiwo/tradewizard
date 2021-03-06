import { Fragment } from "react";
import toast from "react-hot-toast";
import useBook from "hooks/useBook";
import useStep from "hooks/useStep";
import { capitalizeFirstWord } from "utils/common";

const GenreForm = () => {
  const { newBook, genres, saveBookGenre } = useBook();
  const { changeActiveStep } = useStep();

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
        <section className="flex flex-wrap genre-list" data-cy="genre-list">
          {genres.map((item) => {
            return (
              <button
                onClick={handleClick.bind(this, item)}
                key={item.name}
                data-cy={`genre-item-${item.id}`}
                className={`btn btn-outline mr-xs mb-sm ${
                  item.id === newBook?.genre?.id ? "active" : ""
                }`}
              >
                {capitalizeFirstWord(item.name)}
              </button>
            );
          })}
        </section>

        <section className="flex align-center justify-end steps__actions">
          <button
            type="button"
            onClick={moveStep}
            data-cy="move-step-1"
            className="btn btn-primary"
          >
            Next
          </button>
        </section>
      </section>
    </Fragment>
  );
};

export default GenreForm;

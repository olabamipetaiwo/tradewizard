import { useContext } from "react";
import toast from "react-hot-toast";
import BookContext from "context/Book/BookContext";
import StepContext from "context/Step/StepContext";

const SubGenreForm = () => {
  const { newBook, saveBookSubGenre } = useContext(BookContext);
  const { isAddNewSubGenreActive, changeActiveStep, showAddNewSubGenre } =
    useContext(StepContext);

  const handleClick = (chosenGenre) => {
    saveBookSubGenre(chosenGenre);
  };

  const moveStep = () => {
    if (!newBook?.subgenre) {
      toast.error("You must select a book subgenre before you proceed");
    } else {
      changeActiveStep(isAddNewSubGenreActive ? 3 : 4);
    }
  };

  const showAddSubGenre = () => {
    showAddNewSubGenre();
  };

  return (
    <section className="steps__content mb-sm">
      <div className="flex flex-wrap">
        {newBook.genre.subgenres.map((item) => {
          return (
            <button
              onClick={handleClick.bind(this, item)}
              key={item.name}
              className={`btn btn-outline mr-sm mb-sm ${
                item.id === newBook?.subgenre?.id ? "active" : ""
              }`}
            >
              {item.name}
            </button>
          );
        })}
        <button
          type="button"
          onClick={showAddSubGenre}
          className="btn btn-primary mb-sm"
        >
          Add New
        </button>
      </div>

      <section className="flex align-center justify-end steps__actions">
        <button
          onClick={() => changeActiveStep(1)}
          className="btn btn-outline mr-sm"
        >
          <span>Back</span>
        </button>
        <button onClick={moveStep} className="btn btn-primary ">
          Next
        </button>
      </section>
    </section>
  );
};

export default SubGenreForm;

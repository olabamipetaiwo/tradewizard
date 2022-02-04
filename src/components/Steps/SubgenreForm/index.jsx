import toast from "react-hot-toast";
import useBook from "hooks/useBook";
import useStep from "hooks/useStep";
import { capitalizeFirstWord } from "utils/common";
import { ReactComponent as CaretIcon } from "assets/caret-left.svg";

const SubGenreForm = () => {
  const { newBook, subgenres, saveBookSubGenre } = useBook();
  const { isAddNewSubGenreActive, changeActiveStep, showAddNewSubGenre } =
    useStep();

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
        {subgenres.map((item, index) => {
          return (
            <button
              data-cy={`subgenre-item-${index}`}
              onClick={handleClick.bind(this, item)}
              key={item.name}
              className={`btn btn-outline mr-xs mb-sm ${
                item.id === newBook?.subgenre?.id ? "active" : ""
              }`}
            >
              {capitalizeFirstWord(item.name)}
            </button>
          );
        })}
        <button
          type="button"
          onClick={showAddSubGenre}
          data-cy="add-new-subgenre"
          className="btn btn-primary mb-sm"
        >
          Add New
        </button>
      </div>

      <section className="flex align-center justify-end steps__actions">
        <button
          onClick={() => changeActiveStep(1)}
          className="btn btn-outline mr-sm"
          data-cy="move-back-2"
        >
          <CaretIcon className="mr-xs" />
          <span className="flex align-center"> Back </span>
        </button>

        <button
          data-cy="move-step-2"
          onClick={moveStep}
          className="btn btn-primary "
        >
          Next
        </button>
      </section>
    </section>
  );
};

export default SubGenreForm;

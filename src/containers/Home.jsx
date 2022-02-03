import { useContext } from "react";
import StepContext from "context/Step/StepContext";
import BookContext from "context/Book/BookContext";
import { ReactComponent as DoneIcon } from "assets/done.svg";
import { capitalizeFirstWord } from "utils/common";
import "./home.scss";

const Home = () => {
  const { books, newBookCreated } = useContext(BookContext);

  return (
    <main className="main">
      <section className="content flex flex-col align-center pt-lg">
        <h2 className="h-title text-center mb-sm"> TradeCore Wizard</h2>

        {newBookCreated ? <SuccessModal /> : <StepsContainer />}

        <section className="main__container mt-lg">
          <h2 className="h-title mb-sm">Book Listing</h2>
          <section className="books__container mb-sm">
            <ul>
              {books.length > 0 ? (
                books.map((book) => {
                  return (
                    <li key={book.title + book.id} className="p-title mb-xs">
                      {capitalizeFirstWord(book.title)}
                    </li>
                  );
                })
              ) : (
                <li>No Books in Library Yet</li>
              )}
            </ul>
          </section>
        </section>
      </section>
    </main>
  );
};

const SuccessModal = () => {
  const { changeActiveStep } = useContext(StepContext);
  const { resetState } = useContext(BookContext);

  const resetFlow = () => {
    resetState();
    changeActiveStep(1);
  };

  return (
    <section className="form__container flex flex-col justify-center align-center p-xl">
      <div className="circle mb-lg">
        <figure>
          <DoneIcon />
        </figure>
      </div>
      <h2 className="h-1 mb-lg">Book added successfully</h2>
      <button className="btn btn-primary" onClick={resetFlow}>
        Add Another Book
      </button>
    </section>
  );
};

const StepsContainer = () => {
  const { activeStep, steps, changeActiveStep } = useContext(StepContext);
  const { newBook, isAddNewSubGenreActive } = useContext(BookContext);

  const handleStepClick = (currentStep) => {
    switch (currentStep) {
      case 1:
        changeActiveStep(currentStep);
        break;
      case 2:
      case 3:
        newBook.genre && changeActiveStep(currentStep);
        break;
      case 4:
        newBook.genre &&
          newBook.subgenre &&
          changeActiveStep(isAddNewSubGenreActive ? 3 : 4);
        break;
      default:
        return;
    }
  };

  return (
    <section className="main__container">
      <h6 className="p-title pb-sm"> Add Book - New Book</h6>
      <section className="steps__indicator mb-sm">
        <section className="flex justify-between align-center">
          {steps
            .filter((item) => {
              return item.showByDefault;
            })
            .map((item, id) => {
              const completed = id < activeStep;
              return (
                <div
                  key={item.label}
                  className={`flex flex-col steps__item ${
                    completed ? "active" : ""
                  }`}
                  onClick={() => handleStepClick(item.id)}
                >
                  <>
                    <button>{id + 1}</button>
                    <p>{item.label}</p>
                  </>
                </div>
              );
            })}
        </section>
      </section>

      {steps
        .filter((item) => {
          return item.showByDefault && activeStep === item.id;
        })
        .map((item) => {
          return <item.Component key={item.label} />;
        })}
    </section>
  );
};

export default Home;

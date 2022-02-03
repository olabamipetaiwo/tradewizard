import useBook from "hooks/useBook";
import useStep from "hooks/useStep";

const StepsContainer = () => {
  const { activeStep, steps, changeActiveStep } = useStep();
  const { newBook, isAddNewSubGenreActive } = useBook();

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

export default StepsContainer;

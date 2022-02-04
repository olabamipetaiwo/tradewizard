import useBook from "hooks/useBook";
import useStep from "hooks/useStep";
import { ReactComponent as DoneIcon } from "assets/done.svg";

const SuccessModal = () => {
  const { changeActiveStep } = useStep();
  const { resetState } = useBook();

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
      <button
        data-cy="reset-form"
        className="btn btn-primary"
        onClick={resetFlow}
      >
        Add Another Book
      </button>
    </section>
  );
};

export default SuccessModal;

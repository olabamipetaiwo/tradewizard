import { useContext } from "react";
import StepContext from "context/Step/StepContext";

export const useStep = () => {
  const stepContext = useContext(StepContext);
  return stepContext;
};

export default useStep;

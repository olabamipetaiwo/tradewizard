import { CHANGE_STEP, ACTIVATE_ADD_NEW_SUBGENRE } from "../types";

const StepReducer = (state, action) => {
  switch (action.type) {
    case CHANGE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    case ACTIVATE_ADD_NEW_SUBGENRE:
      return {
        ...state,
        steps: state.steps.map((step) =>
          step.id === 3 ? { ...step, showByDefault: true } : step
        ),
        activeStep: 3,
        isAddNewSubGenreActive: true,
      };
    default:
      return state;
  }
};

export default StepReducer;

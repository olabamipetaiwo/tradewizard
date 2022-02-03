import React, { useReducer } from "react";
import StepContext from "./StepContext";
import StepReducer from "./StepReducer";
import { CHANGE_STEP, ACTIVATE_ADD_NEW_SUBGENRE } from "../types";

import GenreForm from "components/Steps/GenreForm";
import SubGenreForm from "components/Steps/SubgenreForm";
import BookForm from "components/Steps/BookForm";
import AddSubGenreForm from "components/Steps/SubgenreForm/AddSubGenreForm";

const StepState = (props) => {
  const initialState = {
    activeStep: 1,
    isAddNewSubGenreActive: false,
    steps: [
      {
        id: 1,
        Component: GenreForm,
        label: "Genre",
        showByDefault: true,
      },
      {
        id: 2,
        Component: SubGenreForm,
        label: "SubGenre",
        showByDefault: true,
      },
      {
        id: 3,
        Component: AddSubGenreForm,
        label: "AddSubGenre",
        showByDefault: false,
      },
      {
        id: 4,
        Component: BookForm,
        label: "Information",
        showByDefault: true,
      },
    ],
  };

  const [state, dispatch] = useReducer(StepReducer, initialState);

  const changeActiveStep = async (stepId) => {
    dispatch({
      type: CHANGE_STEP,
      payload: stepId,
    });
  };

  const showAddNewSubGenre = async () => {
    dispatch({
      type: ACTIVATE_ADD_NEW_SUBGENRE,
    });
  };

  return (
    <StepContext.Provider
      value={{
        activeStep: state.activeStep,
        steps: state.steps,
        changeActiveStep,
        showAddNewSubGenre,
      }}
    >
      {props.children}
    </StepContext.Provider>
  );
};

export default StepState;

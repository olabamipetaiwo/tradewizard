import React from "react";
import { render } from "@testing-library/react";

import BookState from "context/Book/BookState";
import StepState from "context/Step/StepState";

const Wrapper = ({ children }) => {
  return (
    <StepState>
      <BookState>{children} </BookState>
    </StepState>
  );
};

const customRender = (ui, options) => {
  return render(ui, { wrapper: Wrapper, ...options });
};

export * from "@testing-library/react";
export { customRender as render };

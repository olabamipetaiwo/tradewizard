import BookState from "context/Book/BookState";
import StepState from "context/Step/StepState";
import Home from "containers/Home";
import { Fragment } from "react";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Fragment>
      <Toaster
        duration="500"
        containerStyle={{
          bottom: 20,
          zIndex: "9999999",
        }}
        toastOptions={{
          success: {
            style: {
              background: "#1b1f25",
              color: "#ffffff",
            },
          },
          error: {
            style: {
              background: "orangered",
              color: "#ffffff",
            },
          },
        }}
      />
      <StepState>
        <BookState>
          <Home />
        </BookState>
      </StepState>
    </Fragment>
  );
};

export default App;

import {
  screen,
  getByText,
  not,
  waitFor,
  queryByText,
  waitForElementToBeRemoved,
  fireEvent,
} from "@testing-library/react";
import { render } from "./custom-render";
import App from "./App";

import GenreForm from "components/Steps/GenreForm";
import { GENRES } from "utils/common";

describe("<App />", () => {
  it("Renders Main app component correctly", () => {
    render(<App />);
    expect(screen.getByText(/TradeCore Wizard/i)).toBeInTheDocument();
  });

  test("it displays a button for each genre", async () => {
    render(<GenreForm />);
    // const genreList = await waitFor(() => screen.findAllByTestId("genre-list"));
    const genreList = screen.getAllByRole("genre-button");
    expect(genreList).toHaveLength(5);
  });

  it("Renders <GenreForm/> component and I can select a genre", async () => {
    render(<GenreForm />);
    GENRES.slice().forEach((genre) => {
      expect(screen.getByText(genre.name)).toBeInTheDocument();
    });

    const genreOneButton = screen.getByTestId("genre-item-1");
    fireEvent.click(genreOneButton);
    expect(genreOneButton.classList.contains("active")).toBe(true);

    const stepOneNextButton = screen.getByTestId("move-step");
    fireEvent.click(stepOneNextButton);
    expect(screen.queryByText("Genre 1")).not.toBeInTheDocument();
  });
});

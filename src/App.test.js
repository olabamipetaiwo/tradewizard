import { screen } from "@testing-library/react";
import { render } from "./custom-render";
import App from "./App";

describe("App", () => {
  it("Renders Main aAp", () => {
    render(<App />);
    expect(screen.getByText(/TradeCore Wizard/i)).toBeInTheDocument();
  });
});

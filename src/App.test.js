import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders AppBar with web app name", () => {
    render(<App />);
    const appBar = screen.getByText(/I Love Reading/i);
    expect(appBar).toBeInTheDocument();
  });
});

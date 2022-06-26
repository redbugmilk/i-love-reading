import { render, screen } from "@testing-library/react";
import EmptyBookList from "./EmptyBookList";

describe("EmptyBookList Component", () => {
  it("renders image", () => {
    render(<EmptyBookList />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
  });
  it("renders message", () => {
    render(<EmptyBookList />);
    const message = screen.getByText(/Oh no! There are no books!/i);
    expect(message).toBeInTheDocument();
  });
});

import booksReducer, { storedBooks } from "./booksSlice";

describe("books reducer", () => {
  const initialState = { values: [], count: 0 };
  it("handles initialState", () => {
    expect(booksReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });
  it("stores books", () => {
    const finalState = { values: ["book1"], count: 1 };
    expect(
      booksReducer(initialState, storedBooks({ books: ["book1"], count: 1 }))
    ).toEqual(finalState);
  });
});

import PropTypes from "prop-types";
import { List } from "@mui/material";
import { useState } from "react";
import BookItem from "./BookItem";

function BooksList({ books, handleBookSelection }) {
  const [selectedIndex, setSelectedIndex] = useState();

  const handleItemSelection = (event, id) => {
    setSelectedIndex(id);
    handleBookSelection(id);
  };

  return (
    <List>
      {books.map((item, index) => (
        <BookItem
          key={index}
          id={item.id}
          author={item.book_author[0]}
          title={item.book_title}
          selectedIndex={selectedIndex}
          handlerSelect={handleItemSelection}
        />
      ))}
    </List>
  );
}

BooksList.propType = {
  books: PropTypes.array.isRequired,
  handleBookSelection: PropTypes.func.isRequired,
};

export default BooksList;

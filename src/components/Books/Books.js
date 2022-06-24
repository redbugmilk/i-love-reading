import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "../../hooks/useAxios";
import BooksList from "./BooksList";
import { storedBooks, selectBooks } from "./booksSlice";
import EmptyBookList from "./EmptyBookList";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const { request, error, isLoading } = useAxios();
  const [page, setPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState();
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const totalNumberPages = (total) => Math.floor(total / itemsPerPage);

  const loadData = useCallback(
    (serviceResponse) => dispatch(storedBooks(serviceResponse)),
    []
  );

  useEffect(() => {
    const url = `http://nyx.vima.ekt.gr:3000/api/books?page=${page}&itemsPerPage=${itemsPerPage}`;
    request({ url, method: "POST" }, loadData);
  }, [request, page, itemsPerPage, loadData]);

  const handleSelect = (id) => {
    setSelectedIndex(id);
  };

  console.log(books.values);
  return (
    <>
      {!isLoading && books.values.length ? (
        <BooksList books={books.values} handleBookSelection={handleSelect} />
      ) : (
        <EmptyBookList />
      )}
      <p>{books && totalNumberPages(books.count)}</p>
    </>
  );
}

export default Books;

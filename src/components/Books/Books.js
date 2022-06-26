import { Box, Divider, Stack, TablePagination } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import useAxios from "../../hooks/useAxios";
import BookDetail from "./BookDetail";
import BooksList from "./BooksList";
import { storedBooks, selectBooks } from "./booksSlice";
import EmptyBookList from "./EmptyBookList";

function Books() {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);
  const { request, error, isLoading } = useAxios();
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedItem, setSelectedItem] = useState({});
  const filterBookById = (id) => books.values.find((item) => item.id === id);

  const loadData = useCallback(
    (serviceResponse) => dispatch(storedBooks(serviceResponse)),
    [dispatch]
  );

  useEffect(() => {
    const url = `http://nyx.vima.ekt.gr:3000/api/books?page=${page}&itemsPerPage=${itemsPerPage}`;
    request({ url, method: "POST" }, loadData);
  }, [request, page, itemsPerPage, loadData]);

  const handleSelect = (id) => {
    const filterItem = filterBookById(id);
    const mappedSelectItem = (book) => ({
      id: book.id,
      author: book.book_author,
      pages: book.book_pages,
      title: book.book_title,
      publication: {
        city: book.book_publication_city,
        country: book.book_publication_country,
        year: book.book_publication_year,
      },
    });
    setSelectedItem(mappedSelectItem(filterItem));
    setOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <BookDetail open={open} {...selectedItem} handleClose={handleClose} />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
      >
        {!isLoading && books.count && (
          <Box component="div">
            <TablePagination
              component="div"
              count={books.count}
              page={page}
              rowsPerPageOptions={[5, 10, 25]}
              onPageChange={handleChangePage}
              rowsPerPage={itemsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        )}
        {!isLoading && books.values.length ? (
          <BooksList books={books.values} handleBookSelection={handleSelect} />
        ) : (
          <EmptyBookList />
        )}
      </Stack>
    </React.Fragment>
  );
}

export default Books;

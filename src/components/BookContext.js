import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookContext = createContext();
const apiUrl = "http://localhost:9292/books";

function BookProvider({ children }) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [search, setSearch] = useState("");
  const [bookId, setBookId] = useState(1);
  const [book, setBook] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((books) => {
        setBooks(books);
        setIsPending(false);
        setErrors([]);
      })
      .catch((err) => setErrors([...err]));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:9292/books/${bookId}`)
      .then((response) => response.json())
      .then((data) => setBook(data))
      .catch((err) => setErrors([...err]));
  }, [bookId]);

  function handleOnClickBook(bookItem) {
    setBookId(bookItem.id);
    navigate(`/booklist/${bookItem.id}}`);

  }

  console.log(book.reviews)

  function onHandleSearchChange(event) {
    const value = event.target.value;
    setSearch(value);
  }

  const bookItems = books.filter((book) => book.title.includes(search));

  const value = {
    bookItems,
    book,
    errors,
    isPending,
    search,
    handleOnClickBook,
    onHandleSearchChange,
  };

  return (
    <BookContext.Provider value={value}> {children} </BookContext.Provider>
  );
}

export { BookProvider, BookContext };

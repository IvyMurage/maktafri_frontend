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
  const [bookId, setBookId] = useState(null)
  const [book, setBook] = useState ([]);
  
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
        // .then((data) => console.log(data))
        .then((data) => setBook(data))
        .catch(console.log);
}, [bookId]);

console.log(book)

  function handleOnClickBook(bookItem) {
    setBookId(bookItem.id)
    console.log(
      "This book has been clicked and this is the bookItem",
      bookItem
    );
    navigate(`/booklist/${bookItem.id}}`);
  }

  function onHandleSearchChange(event) {
    const value = event.target.value;
    setSearch(value)
    console.log(search);
  }

  const bookItems = books.filter(book => book.title.includes(search))

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

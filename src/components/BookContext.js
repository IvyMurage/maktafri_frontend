import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookContext = createContext();
const apiUrl = "http://localhost:9292/books";

function BookProvider({ children }) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [bookId, setBookId] = useState(null)
  const [book, setBook] = useState ([]);
  
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((books) => {
        setBooks(books)
        setIsPending(false)
        setErrors([])
      } )
      .catch(err => setErrors([...err]))
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

  console.log("This are the generated books", books);
  console.log("this is the book id", bookId)

  const value = {
    books,
    book,
    errors,
    isPending,
    handleOnClickBook,
  };

  return (
    <BookContext.Provider value={value}> {children} </BookContext.Provider>
  );
}

export { BookProvider, BookContext };

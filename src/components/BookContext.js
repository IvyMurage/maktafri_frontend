import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookContext = createContext();
const apiUrl = "http://localhost:9292/books";

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  function handleOnClickBook(bookItem) {
    console.log(
      "This book has been clicked and this is the bookItem",
      bookItem
    );
    navigate(`/booklist/${bookItem.id}}`);
  }

  console.log("This are the generated books", books);

  const value = {
    books,
    handleOnClickBook,
  };

  return (
    <BookContext.Provider value={value}> {children} </BookContext.Provider>
  );
}

export { BookProvider, BookContext };

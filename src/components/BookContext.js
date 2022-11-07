import React, { createContext, useEffect, useState } from "react";

const BookContext = createContext();
const apiUrl = "http://localhost:9292/books";

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}`)
      .then((res) => res.json())
      .then((books) => setBooks(books));
  }, []);

  console.log("This are the generated books", books);

  const value = {
    books,
  };

  return <BookContext.Provider value={value}> {children} </BookContext.Provider>;
}

export { BookProvider, BookContext };

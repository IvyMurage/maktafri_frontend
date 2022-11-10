import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookContext = createContext({});

const apiUrl = "http://localhost:9292/books";

function BookProvider({ children }) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [search, setSearch] = useState("");
  const [bookId, setBookId] = useState(1);

  function updateBook(book) {
    setBooks((prevBooks) => [...prevBooks, book]);
  }

  const localFavouritesJson = localStorage.getItem("favourites");
  const localFavourites = localFavouritesJson
    ? JSON.parse(localFavouritesJson)
    : [];
  const [favorites, setFavorites] = useState(localFavourites);

  function addToFavorites(book) {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.concat(book);
    setFavorites(newFavorites);
    localStorage.setItem("favourites", JSON.stringify(newFavorites));
  }

  const removeFromFavorites = (id) => {
    const oldFavorites = [...favorites];
    const newFavorites = oldFavorites.filter((book) => book.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem("favourites", JSON.stringify(newFavorites));
  };

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

  function handleOnClickBook(bookItem) {
    setBookId(bookItem.id);
    navigate(`/booklist/${bookItem.id}}`);
  }

  function onHandleSearchChange(event) {
    const value = event.target.value;
    setSearch(value);
  }

  const bookItems = books.filter((book) => book.title.includes(search));

  const value = {
    bookId,
    bookItems,
    errors,
    isPending,
    search,
    handleOnClickBook,
    onHandleSearchChange,
    favorites,
    addToFavorites,
    removeFromFavorites,
    updateBook,
  };

  return (
    <BookContext.Provider value={value}> {children} </BookContext.Provider>
  );
}

export { BookProvider, BookContext };

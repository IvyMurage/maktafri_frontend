import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookContext = createContext({});

const apiUrl = "https://maktafri-api.herokuapp.com/books";

function BookProvider({ children }) {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [search, setSearch] = useState("");
  const [bookId, setBookId] = useState(1);
  const [trigger, setTrigger] = useState(false);

  function updateBook(book) {
    setBooks((prevBooks) => [...prevBooks, { ...book }]);
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

  function handleDeleteBook(bookToDelete) {
    fetch(`${apiUrl}/${bookToDelete.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {});
    setBooks((prevBooks) =>
      prevBooks.filter((book) => book.id !== bookToDelete.id)
    );
  }

  function handleUpdateBook(book) {
    console.log("This book has been updated");
    setTrigger(true);
    console.log(trigger);
  }

  function handleCancelUpdate() {
    console.log("This update has been canceled");
    setTrigger((prevTrigger) => (prevTrigger = false));
  }

  const bookItems = books.filter((book) => book.title.includes(search));

  const value = {
    bookId,
    bookItems,
    errors,
    isPending,
    search,
    favorites,
    trigger,
    handleOnClickBook,
    onHandleSearchChange,
    addToFavorites,
    removeFromFavorites,
    updateBook,
    handleDeleteBook,
    handleUpdateBook,
    handleCancelUpdate,
  };

  return (
    <BookContext.Provider value={value}> {children} </BookContext.Provider>
  );
}

export { BookProvider, BookContext };

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
  const [book, setBook] = useState({
    title: "Purple Hibiscus",
    category: "Crime",
    description: "",
    image_url: "",
    author: "",
    published_date: "",
  });

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
    setBookId(book.id);
    setTrigger(true);
    console.log(bookId);
  }

  function handleCancelUpdate() {
    console.log("This update has been canceled");
    setTrigger((prevTrigger) => (prevTrigger = false));
  }

  function handleOnChangeUpdate(event) {
    const name = event.target.name;
    const value = event.target.value;
    setBook({ ...book, [name]: value });
  }

  function handleOnSubmitUpdate(event) {
    event.preventDefault();
    console.log(book);
    fetch(`${apiUrl}/${bookId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
    .then(res => res.json())
    .then(book => console.log(book))

    console.log("This change has been made");
    setBook({
      title: "Purple Hibiscus",
      category: "Crime",
      description: "",
      image_url: "",
      author: "",
      published_date: "",
    });
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
    book,
    handleOnClickBook,
    onHandleSearchChange,
    addToFavorites,
    removeFromFavorites,
    updateBook,
    handleDeleteBook,
    handleUpdateBook,
    handleCancelUpdate,
    handleOnChangeUpdate,
    handleOnSubmitUpdate,
  };

  return (
    <BookContext.Provider value={value}> {children} </BookContext.Provider>
  );
}

export { BookProvider, BookContext };

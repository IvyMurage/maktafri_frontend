import React, { useContext } from "react";
import "../App";
import { BookContext } from "./BookContext";

function Favorites() {
  const { favorites, addToFavorites, removeFromFavorites} =
    useContext(BookContext);

  console.log("Favorite Books: ", favorites);

  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <h2>{book.title}</h2>
            <h3>Written by: {book.authors}</h3>
            <div>
              {" "}
              <img src={book.image_url} alt="#"></img>
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button
                  type="button"
                  id="favourite-btn"
                  className="btn btn-primary"
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Remove From Favorites
                </button>
              ) : (
                <button
                  type="button"
                  id="favourite-btn"
                  className="btn btn-primary"
                  onClick={() => addToFavorites(book)}
                >
                  Favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You Do not Have any Favorite Books Yet</h1>
      )}
    </div>
  );
}

export default Favorites;

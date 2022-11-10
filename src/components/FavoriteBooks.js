import React, { useContext } from "react";
import "./FavoriteBooks.css";
import { BookContext } from "./BookContext";
import BookCard from "./BookStyles/BookCard";

function Favorites() {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(BookContext);


  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  };

  return (
    <>
      <h1>Favorite Reads</h1>
      <div className="favorites-container">
        <div className="favorites">
          {favorites.length > 0 ? (
            favorites.map((book) => (
              <div key={book.id}>
                <BookCard
                  bookImage={book.image_url}
                  bookTitle={book.title}
                  bookCategory={book.category}
                  bookAuthor={book.author.name}
                  book={book}
                />
                <>
                  <div className="button-section">
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
                </>
              </div>
            ))
          ) : (
            <div className="msg">
              <h3>You Do not Have any Favorite Reads Yet</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Favorites;

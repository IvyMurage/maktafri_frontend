import React, { useContext } from "react";
import { BookContext } from "../BookContext";

function BookCard({ bookImage, bookTitle, bookAuthor, bookCategory, book }) {
  const { handleOnClickBook } = useContext(BookContext);
  return (
    <div className="book-card" onClick={() => handleOnClickBook(book)}>
      <img src={bookImage} alt={bookTitle} />
      <h4> {bookTitle}</h4>
      <p>{bookCategory}</p>
      <p>{bookAuthor}</p>
    </div>
  );
}

export default BookCard;

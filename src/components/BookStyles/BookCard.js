import React, { useContext } from "react";
import { BookContext } from "../BookContext";

function BookCard({ bookImage, bookTitle, bookAuthor, bookCategory, book }) {
  const { handleOnClickBook } = useContext(BookContext);
  return (
    <div className="book-card">
      <img src={bookImage} alt={bookTitle} />
      <h4 onClick={() => handleOnClickBook(book)}> {bookTitle}</h4>
      <p>{bookCategory}</p>
      <p>{bookAuthor}</p>
    </div>
  );
}

export default BookCard;

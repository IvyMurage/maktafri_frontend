import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BookContext } from "../BookContext";

function BookCard({ bookImage, bookTitle, bookAuthor, bookCategory, bookReview, book }) {
  const { handleOnClickBook } = useContext(BookContext);
  console.log(bookReview)
  return (
    <div className="book-card">
      <img src={bookImage} alt={bookTitle} />
      <h4 onClick={() => handleOnClickBook(book)}> {bookTitle}</h4>
      <p>{bookCategory}</p>
      <p>{bookAuthor}</p>
      <FontAwesomeIcon icon={faStar} className="fa-star" />
    </div>
  );
}

export default BookCard;

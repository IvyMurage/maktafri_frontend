import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function BookCard({ bookImage, bookTitle, bookAuthor, bookCategory }) {
  return (
    <div className="book-card">
      <img src={bookImage} alt={bookTitle} />
      <h4> {bookTitle}</h4>
      <p>{bookCategory}</p>
      <p>{bookAuthor}</p>
      <FontAwesomeIcon icon={faStar} className="fa-star"/>
    </div>
  );
}

export default BookCard;

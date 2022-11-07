import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BookContext } from "../BookContext";
import { Link } from "react-router-dom";

function BookCard({ bookImage, bookTitle, bookAuthor, bookCategory, book }) {
  const { handleOnClickBook } = useContext(BookContext);
  return (
    <div className="book-card">
      <img src={bookImage} alt={bookTitle} />
      <Link to={`/booklist/${book.id}`}>
        <h4 onClick={() => handleOnClickBook(book)}> {bookTitle}</h4>
      </Link>
      <p>{bookCategory}</p>
      <p>{bookAuthor}</p>
      <FontAwesomeIcon icon={faStar} className="fa-star" />
    </div>
  );
}

export default BookCard;

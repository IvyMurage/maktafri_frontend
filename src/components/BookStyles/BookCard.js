import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { BookContext } from "../BookContext";

function BookCard({ bookImage, bookTitle, bookAuthor, bookCategory, book }) {
  const { handleOnClickBook } = useContext(BookContext);
  const bookRating =
    book.reviews.reduce((acc, review) => acc + review.star_rating, 0) /
    book.reviews.length;
  const star_rating = Math.ceil(bookRating);
  return (
    <div className="book-card">
      <img src={bookImage} alt={bookTitle} />
      <h4 onClick={() => handleOnClickBook(book)}> {bookTitle}</h4>
      <p>{bookCategory}</p>
      <p>{bookAuthor}</p>
      {[...Array(star_rating)].map((n, index) => (
        <FontAwesomeIcon icon={faStar} className="fa-star" key={index} />
      ))}
    </div>
  );
}

export default BookCard;

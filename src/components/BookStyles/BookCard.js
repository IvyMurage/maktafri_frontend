import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { BookContext } from "../BookContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function BookCard({ bookImage, bookTitle, bookAuthor, bookCategory, book }) {
  const { handleOnClickBook } = useContext(BookContext);
  return (
    <div className="book-card" onClick={() => handleOnClickBook(book)}>
      <img src={bookImage} alt={bookTitle} />
      <h4> {bookTitle}</h4>
      <p>{bookCategory}</p>
      <p>{bookAuthor}</p>
     <button className="delete-btn"><FontAwesomeIcon icon={faTrash}/></button> 
    </div>
  );
}

export default BookCard;

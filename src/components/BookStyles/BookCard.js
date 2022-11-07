import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function BookCard() {
  return (
    <div className="book-card">
      <img src={"book.image_url"} alt={"book.title"} />
      <h4> Book.title </h4>
      <p>Plant Category</p>
      <FontAwesomeIcon icon={faStar} />
    </div>
  );
}

export default BookCard;

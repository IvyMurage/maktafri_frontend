import React from "react";
import BookCard from "./BookCard";

function BookList() {
  return (
    <div className="book-list">
        <h3>Popular Now</h3>
      <BookCard />
    </div>
  );
}

export default BookList;

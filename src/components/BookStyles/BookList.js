import React, { useContext } from "react";
import { BookContext } from "../BookContext";
import BookCard from "./BookCard";

function BookList() {
const {books} = useContext(BookContext)
    const bookList = books.map(book => {<BookCard key={book.id}/>})
  return (
    <div className="book-list">
        <h3>Popular Now</h3>
      <BookCard />
    </div>
  );
}

export default BookList;

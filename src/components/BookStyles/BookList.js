import React, { useContext } from "react";
import { BookContext } from "../BookContext";
import BookCard from "./BookCard";
import BookUpdate from "./BookUpdate";

function BookList() {
  const { bookItems, isPending, errors, trigger } = useContext(BookContext);
  const bookList = bookItems.map((book) => (
    <BookCard
      key={book.id}
      bookImage={book.image_url}
      bookTitle={book.title}
      bookCategory={book.category}
      bookAuthor={book.author.name}
      book={book}
    />
  ));
  return (
    <div className="book-list" id="book-list">
      
      {errors.length > 0
        ? errors.map((error) => <span className="error"> {error} </span>)
        : null}
      {isPending ? <h2> Loading... </h2> : bookList}
      {trigger ? <BookUpdate /> : null}
    </div>
  );
}

export default BookList;

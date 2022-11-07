import React, { useContext } from "react";
import { BookContext } from "../BookContext";
import BookCard from "./BookCard";

function BookList() {
  const { books, isPending, errors } = useContext(BookContext);
  const bookList = books.map((book) => (
    <BookCard
      key={book.id}
      bookImage={book.image_url}
      bookTitle={book.title}
      bookCategory={book.category}
      bookAuthor={book.author.first_name + " " + book.author.last_name}
      book={book}
    />
  ));
  return (
    <div className="book-list">
      {errors.length > 0
        ? errors.map((error) => <span className="error">{error}</span>)
        : null}
      {isPending ? <h2>Loading...</h2> : bookList}
    </div>
  );
}

export default BookList;

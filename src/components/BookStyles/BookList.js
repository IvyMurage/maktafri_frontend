import React, { useContext } from "react";
import { BookContext } from "../BookContext";
import BookCard from "./BookCard";

function BookList() {
  const { books } = useContext(BookContext);
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
  return <div className="book-list">{bookList}</div>;
}

export default BookList;

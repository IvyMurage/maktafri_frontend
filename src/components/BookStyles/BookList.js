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
      bookCategory={book.categroy}
      bookAuthor={book.author.first_name}
    />
  ));
  return (
    <div className="book-list">
      {/* <h3>Popular Now</h3> */}
      {bookList}
    </div>
  );
}

export default BookList;

import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../BookContext";
import "./BookPage.css";
import ReviewsCard from "../ReviewsCard";

function BookPage() {
  const { bookId } = useContext(BookContext);
  const [book, setBook] = useState([]);
  const [bookReviews, setBookReviews] = useState([]);
  const [bookAuthor, setBookAuthor] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9292/books/${bookId}`)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => {
        setBook(data);
        setBookReviews(data.reviews)
        setBookAuthor(data.author)
      })
      .catch(console.log);
  }, [bookId]);

  return (
    <>
      <div className="contain">
        <div className="row">
          <div id="book-image">
            <img src={book.image_url} alt={book.title} />
          </div>
          <div id="book-body">
            <h1> {book.title} </h1>
            <br></br>
            <h2>By: {bookAuthor.first_name}</h2>
            <h2>Category: {book.category}</h2>
            <br></br>
            <p>{book.description}</p>
          </div>
        </div>
        <div className="book-buttons">
          <button id="review-btn">Review</button>
          <button id="favourite-btn">Favourite</button>
        </div>
        {bookReviews.map((review) => (
          <ReviewsCard
            key={review.id}
            starRating={review.star_rating}
            comments={review.comment}
            // user={review.user.user_name}
          />
        ))}

        {/* <BookReviewForm /> */}
      </div>
    </>
  );
}

export default BookPage;

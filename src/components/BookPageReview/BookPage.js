import React, { useContext, useEffect, useState } from "react";
import { BookContext } from "../BookContext";
import "./BookPage.css";
import ReviewsCard from "../ReviewsCard";
import BookReviewForm from "./BookReviewForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";



function BookPage() {
  const { bookId, favorites, addToFavorites, removeFromFavorites } = useContext(BookContext);
  const [book, setBook] = useState([]);
  const [bookReviews, setBookReviews] = useState([]);
  const [bookAuthor, setBookAuthor] = useState({});



  const favoritesChecker=(id)=>{
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
}


  useEffect(() => {
    fetch(`http://localhost:9292/books/${bookId}`)
      .then((response) => response.json())
      // .then((data) => console.log(data))
      .then((data) => {
        setBook(data);
        setBookReviews(data.reviews);
        setBookAuthor(data.author);
      })
      .catch(console.log);
  }, [bookId]);

  return (
    <>
      <div className="book-row">
        <div id="book-image">
          <img src={book.image_url} alt={book.title} />
        </div>
        <div id="book-body">
          <h2> {book.title} </h2>
          <h4>
            By: {bookAuthor.first_name} {bookAuthor.last_name}
          </h4>
          <h4>Category: {book.category}</h4>
          <p>{book.description}</p>
          <div className="book-buttons">
            <button type="button" id="review-btn" className="btn btn-primary">
              Review
              <FontAwesomeIcon icon={faPenToSquare} className="btn-icon" />
            </button>
            {favoritesChecker(book.id) ?
                <button type="button"  id="favourite-btn"  className="btn btn-primary" onClick={()=>removeFromFavorites(book.id)}>
                  Remove From Favorites 
                  <FontAwesomeIcon icon={faHeart} className="btn-icon" /></button> :
            <button
              type="button"  id="favourite-btn"  className="btn btn-primary" onClick={()=>addToFavorites(book)}>
              Favourite
              <FontAwesomeIcon icon={faHeart} className="btn-icon" />
            </button>}
          </div>
        </div>
      </div>

      <div className="reviews-comp">
        <h3>Recent Reviews</h3>
        {bookReviews.map((review) => (
          <ReviewsCard
            key={review.id}
            starRating={review.star_rating}
            comments={review.comment}
          />
        ))}
      </div>
      {/* {
        <div className="review-form">
          <BookReviewForm />
        </div>
      } */}
    </>
  );
}

export default BookPage;

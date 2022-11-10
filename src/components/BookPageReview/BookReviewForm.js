import React, { useState } from "react";
import "./BookReviewForm.css";

function BookReviewForm({ setBookReviews }) {
  const [review, setReview] = useState({
    user_name: "",
    email: "",
    comment: "",
    book_id: 3,
    star_rating: 1,
  });

  function handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) =>
        setBookReviews((prevState) => (prevState = [...prevState, data]))
      );

    setReview({
      user_name: "",
      email: "",
      comment: "",
      book_id: 3,
      star_rating: 1,
    });
  }

  function handleChange(event) {
    setReview({
      ...review,
      [event.target.id]: event.target.value,
    });
  }

  return (
    <React.Fragment>
      <div className="title">Add Review</div>
      <form className="form-group" onSubmit={handleSubmit} >
        <label className="">Username</label>
        <input
          onChange={handleChange}
          value={review.user_name}
          type="text"
          className="form-control"
          id="user_name"
          aria-describedby="user_name"
          placeholder="Enter your username"
        />
        <label className="">Email</label>
        <input
          onChange={handleChange}
          value={review.email}
          type="email"
          className="form-control"
          id="email"
          aria-describedby="email"
          placeholder="Enter your email address"
        />
        <label className="">Star Rating</label>
        <input
          onChange={handleChange}
          value={review.star_rating}
          type="number"
          className="form-control"
          id="star_rating"
          aria-describedby="number"
          placeholder="Enter your star rating (1-5)"
        />
        <label className="">Comment</label>
        <textarea
          onChange={handleChange}
          value={review.comment}
          className="form-control"
          type="text"
          id="comment"
          rows="3"
          placeholder="Enter your comment"
        ></textarea>
        <button id="messageButton">Add Review</button>
      </form>
    </React.Fragment>
  );
}

export default BookReviewForm;

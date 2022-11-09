import React, { useState } from 'react';
import './BookReviewForm.css';

function BookReviewForm (){
    const [review, setReview] = useState({
        username: "",
        comment: "",
        star_rating: ""
    });

    function handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(review),
        });
    }

    function handleChange(event){
        setReview({
            ...review,
            [event.target.id]: event.target.value
        })
    }

    return(
        <React.Fragment>
            <div className = "form-group" onSubmit = {handleSubmit}>
                <label className = "row-one">Username</label>
                <input onChange={handleChange} value = {review.username} type="text" className="form-control" id="username" aria-describedby="username" placeholder='Enter your username'/>
                <label className = "">Star Rating</label>
                <input onChange={handleChange} value = {review.star_rating} type="text" className="form-control" id="rating" aria-describedby="rating" placeholder='Enter the book rating (1-5)'/>
                <label className = "">Comment</label>
                <textarea onChange={handleChange} value={review.comment} className="form-control" id="description" rows="3" placeholder='Enter the book description'></textarea>
                <button id = "messageButton">Add Review</button>
            </div>
        </React.Fragment>
    )

}

export default BookReviewForm
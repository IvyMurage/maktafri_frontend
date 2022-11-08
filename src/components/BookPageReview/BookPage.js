
import React, {useContext} from 'react';
import {BookContext} from '../BookContext';
import './BookPage.css';
import ReviewsCard from '../ReviewsCard';

function BookPage(){
    
    const {book} = useContext(BookContext);

    
    return(
        <>
        <div className = "contain">
            <div className="row">
                <div id = "book-image">
                    <img src = {book.image_url} alt = {book.title}/>
                </div>
                <div id = "book-body">
                    <h1> {book.title} </h1>
                    <br></br>
                    <h2>By: {book.author_id}</h2>
                    <h2>Category: {book.category}</h2>
                    <br></br>
                    <p>{book.description}</p>
                </div>
            </div>
            <div className = "book-buttons">
                <button id = "review-btn" >Review</button>
                <button id = "favourite-btn" >Favourite</button>
            </div>
            {book.reviews.map((review)=> <ReviewsCard key = {book.id} starRating = {review.star_rating} comments = {review.comment} user = {review.user.user_name}/>)}
            
            {/* <BookReviewForm /> */}

        </div>
        </>
    )

}

export default BookPage


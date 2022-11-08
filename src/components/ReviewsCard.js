import './ReviewsCard.css';
import {motion} from 'framer-motion';
import {useEffect, useState} from "react";


function ReviewsCard() {
  

  function loadReviews(){
    fetch("http://localhost:9292/reviews")
    .then((response)=> response.json())
    .then((reviews) => setReviews(reviews))
  }

  const [reviews, setReviews] = useState([]);
  useEffect(()=> {loadReviews()}, [])
  
  return (
    <motion.div className ="carousel">
      <h1>Recent Reviews</h1>
      <motion.div  drag= "x"dragConstraints={{right: 0, left: -17000}} className = "inner-carousel">
       
        {reviews.map((review) => (
           <motion.div className ="item">
           <h1>Book: {review.book_id}</h1>
          <h4>Reviewer: {review.user.user_name}</h4>
          <p>Review: {review.comment}</p>
          <h5>Star Ratings: {review.star_rating}</h5>
          <div className='btn-container'> 
          <button className = "upd-btn">Update Comment</button>
          <br></br>
          <button className = "del-btn">Delete Comment</button>
          </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default ReviewsCard;

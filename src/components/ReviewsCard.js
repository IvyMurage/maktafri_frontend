import "./ReviewsCard.css";
import { motion } from "framer-motion";
// import {BookContext} from '../components/BookContext';
// import {useContext} from "react";

function ReviewsCard({ starRating, comment, user }) {
  // function loadReviews(){
  //   fetch("http://localhost:9292/reviews")
  //   .then((response)=> response.json())
  //   .then((reviews) => setReviews(reviews))
  // }

  // const [reviews, setReviews] = useState([]);
  // const {book} = useContext(BookContext)
  // useEffect(()=> {loadReviews()}, [])

  return (
    <motion.div className="carousel">
      <h1>Recent Reviews</h1>
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -17000 }}
        className="inner-carousel"
      >
        <motion.div className="item">
          <h4>Reviewer: {user}</h4>
          <p>Review: {comment}</p>
          <h5>Star Ratings: {starRating}</h5>
          <div className="btn-container">
            <button className="upd-btn">Update Comment</button>
            <br></br>
            <button className="del-btn">Delete Comment</button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ReviewsCard;

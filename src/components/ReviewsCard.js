import "./ReviewsCard.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import {BookContext} from '../components/BookContext';
// import {useContext} from "react";

function ReviewsCard({user, starRating, comments }) {
  // function loadReviews(){
  //   fetch("http://localhost:9292/reviews")
  //   .then((response)=> response.json())
  //   .then((reviews) => setReviews(reviews))
  // }

  // const [reviews, setReviews] = useState([]);
  // const {book} = useContext(BookContext)
  // useEffect(()=> {loadReviews()}, [])

  // const bookRating = bookReviews.reduce((acc, review) => acc + review.star_rating, 0);
  // const star_rating = Math.ceil(bookRating);

  return (
    <div className = "container">
      <div className="review">
        <div className = "name-row">
          <img className = "pic" src="https://via.placeholder.com/50" alt="user-pic"/>
          <h4>John Doe</h4>
          <div className="btn-container">
            <button type = "button"className=""><FontAwesomeIcon icon={faPenToSquare} className="btn-ic1" /></button>
            <button className=""><FontAwesomeIcon icon={faTrash} className="btn-ic2" /></button>
          </div>
        </div>
        
        
        <p><b>Review: </b><em>{comments}</em></p>
        <h5><b>Star Ratings: </b><em>{starRating}</em> </h5>
      </div>
    </div>
  );
}

export default ReviewsCard;

import "./ReviewsCard.css";

// import {BookContext} from '../components/BookContext';
// import {useContext} from "react";

function ReviewsCard({ starRating, comments }) {
  // function loadReviews(){
  //   fetch("http://localhost:9292/reviews")
  //   .then((response)=> response.json())
  //   .then((reviews) => setReviews(reviews))
  // }

  // const [reviews, setReviews] = useState([]);
  // const {book} = useContext(BookContext)
  // useEffect(()=> {loadReviews()}, [])

  return (
    <div className = "container">
    <div className="review">
        
          <img src="" alt=""/>
          {/* <h4>Reviewer: {user}</h4> */}
          <p><b>Review: </b><em>{comments}</em></p>
          <h5><b>Star Ratings: </b><em>{starRating}</em> </h5>
          <div className="btn-container">
            <button className="">Update Comment</button>
            <br></br>
            <button className="">Delete Comment</button>
          </div>
        
      
    </div>
    </div>
  );
}

export default ReviewsCard;

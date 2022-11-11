import "./ReviewsCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function ReviewsCard({ user, setBookReviews, reviewId, starRating, comments }) {
  function handleDelete(reviewId) {
    fetch(`https://maktafri-api.herokuapp.com/reviews/${reviewId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) =>
        setBookReviews((prevState) =>
          prevState.filter((review) => review.id !== data.id)
        )
      )
      .catch((error) => console.log(error));
  }

  return (
    <div className="container">
      <div className="review">
        <div className="name-row">
          <img
            className="pic"
            src="https://picsum.photos/50/50?random=1"
            alt="user-pic"
          />
          <h4> {user} </h4>
          <div className="btn-container">
            <button onClick={() => handleDelete(reviewId)} className="">
              <FontAwesomeIcon icon={faTrash} className="btn-ic2" />
            </button>
          </div>
        </div>
        <p>
          <b> Review: </b>
          <em>{comments}</em>
        </p>
        {[...Array(starRating)].map((n, index) => (
          <FontAwesomeIcon icon={faStar} className="fa-star" key={index} />
        ))}
      </div>
    </div>
  );
}

export default ReviewsCard;

import React, {useState} from 'react';

function BookReviewForm(){
    const {reviewData, setReviewData} = useState({
        star_rating: 0,
        comment: ""
    })

    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:9292/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(reviewData)
        });
    }

    return (
        <>
            <div className = "message-input">
                <h4>Kindly fill in the form below to add a new review:</h4>
                <form id="messageForm" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Star Rating:</label>
                        <input  value={reviewData.star_rating} type="number" className="form-control" id="rating" aria-describedby="rating" placeholder='Enter the star rating...'/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Comment:</label>
                        <textarea value={reviewData.comment} className="form-control" id="text" rows="3" placeholder='Enter comment ...'></textarea>
                    </div>
                    <button type="submit" id = "messageButton" className="btn btn-primary">Add Review</button>
                </form>
            </div>
        </>
    )
}

export default BookReviewForm
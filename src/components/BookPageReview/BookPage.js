import React, {useEffect, useState} from 'react';
import './Cards.css';

function BookPage(props){
    const [book, setBook] = useState ([]);

    useEffect(() => {
        fetch("http://localhost:9292/books")
            .then((response) => response.json())
            .then((data) => setBook(data))
            .catch(console.error);
    }, [setBook]);

    return(
        <>
            <div className = "book-image-card">
                {props.image}
            </div>
            <div className = "book-description-card">
                {props.description}
            </div>
            <div className = "book-star-rating">
                {props.star_rating}
            </div>
        </>
    )

}

export default BookPage
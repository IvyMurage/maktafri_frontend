
import React, {useContext} from 'react';
import {BookContext} from '../BookContext'

function BookPage(){
    
    const {book} = useContext(BookContext);

    
    return(
        <>
            <div className = "book-image">
                <img src = {book.image_url} alt = {book.title}/>
            </div>
            <div className = "book-body">
                {book.description}
            </div>
            <div className = "book-star-rating">
                {book.star_rating}
            </div>
        </>
    )

}

export default BookPage


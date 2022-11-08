import React, {useEffect, useState, useRef } from "react";

function NewBook() {
    const baseApiUrl = "http://localhost:8000";

    const [categories, setCategories] = useState ([]);

    const bookTitleRef = useRef();
    const categoryRef = useRef();
    const authorRef = useRef();
    const publishedDateRef = useRef();
    const descriptionRef = useRef();

    useEffect(() => {
        fetch(`${baseApiUrl}/categories`)
        .then ((response) => response.json())
        .then((data) => setCategories(data));
    }, [])

    const submitFormHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form className="newform" onsubmit={submitFormHandler}>
           <label> Title
            <input type="text" placeholder="Add book title" ref={bookTitleRef}/>
            </label>
            <label> Category
            <select name="category_id" id="category_id" ref={categoryRef}>
            {categories.map((category) => 
                (<option key={category.id}>{category.name}</option>))}
                </select>
            </label>
                <br/>
            <label> Author
            <input type="text" ref={authorRef}/>
            </label>
            <label> Published Date
            <input type="Date"/>
            </label> <br/>
            <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            ref={descriptionRef}>
            </textarea> 
            <br/>
            <button>Add a Book </button>
        </form>
    )
}

export default NewBook;
<<<<<<< HEAD
=======
import React, { useState } from "react";
import axios from "axios";


function Search() {

  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);

  function handleChange(e){

    const book = e.target.value;
    setBook(book)
  }

  function handleSubmit(e){
    e.preventDefault()
    axios.get("http://localhost:9292/")
    .then(data => {
      console.log(data.items)
    })

  }
  return (
    <form onSubmit={handleSubmit}id="search-form">
      <input type="text" onChange={handleChange} placeholder="Search" value="" />
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}
export default Search;
>>>>>>> 36c78a6 (search section init commit)

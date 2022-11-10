import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BookContext } from "../BookContext";
import "./NewBook.css";

function NewBook() {
  const { updateBook } = useContext(BookContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
    image_url: "",
    published_date: "",
    author: "",
  });
  //  const formObject = {}
  function handleChange(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }
  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        category: data.category,
        image_url: data.image_url,
        published_date: data.published_date,
        author: data.author,
        description: data.description,
      }),
    })
      .then((res) => res.json())
      .then((book) => {
        updateBook(book);
        console.log(book);
      });

    setData({
      title: "",
      category: "",
      description: "",
      image_url: "",
      published_date: "",
      author: "",
    });
    navigate("/");
  }

  return (
    <form className="newform" onSubmit={handleSubmit}>
      <label className="label">
        Title
        <input
          onChange={(e) => handleChange(e)}
          id="title"
          value={data.title}
          type="text"
          placeholder="  Add book title"
        />
      </label>
      <label className="label">
        Category
        <select
          name="select"
          id="category"
          onChange={(e) => handleChange(e)}
          value={data.category}
        >
          <option></option>
          <option onChange={(e) => handleChange(e)} value="  Adventure stories">
            Adventure stories
          </option>
          <option onChange={(e) => handleChange(e)} value="  Classics">
            Classics
          </option>
          <option onChange={(e) => handleChange(e)} value=" Crime">
            Crime
          </option>
          <option
            onChange={(e) => handleChange(e)}
            value="Fairy tales, fables, and folk tales"
          >
            Fairy tales, fables, and folk tales
          </option>
          <option onChange={(e) => handleChange(e)} value="Humor and satire">
            Humor and satire
          </option>
          <option onChange={(e) => handleChange(e)} value="Historical fiction">
            Historical fiction
          </option>
        </select>
      </label>
      <br />
      <label className="label">
        Author
        <input
          onChange={(e) => handleChange(e)}
          id="author"
          type="text"
          value={data.author}
        />
      </label>
      <label className="label">
        Published Date
        <input
          onChange={(e) => handleChange(e)}
          id="published_date"
          type="Date"
          value={data.published_date}
        />
      </label>
      <label className="label">
        Image_url
        <input
          style={{ width: "800px" }}
          type="img"
          onChange={(e) => handleChange(e)}
          id="image_url"
          name="image"
          placeholder="   Add image url"
          value={data.image_url}
        ></input>
      </label>
      <br />
      <label className="label">
        Description
        <textarea
          className="addbook-area"
          onChange={(e) => handleChange(e)}
          name="description"
          id="description"
          cols="50"
          rows="4"
          value={data.description}
        ></textarea>
      </label>
      <br />
      <br />
      <button id="button1" className="addbook">
        Add a Book
      </button>
    </form>
  );
}

export default NewBook;

import React, { useContext } from "react";
import { BookContext } from "../BookContext";

import "./Bookupdate.css";

function BookUpdate() {
  const {
    handleCancelUpdate,
    handleOnChangeUpdate,
    handleOnSubmitUpdate,
    book,
  } = useContext(BookContext);
  const renderForm = () => (
    <div className="popup">
      <form className="edit-form" onSubmit={handleOnSubmitUpdate}>
        <div className="form-section-1">
          <div className="section-1">
            <label className="update-label">Title</label>
            <br></br>
            <input
              type="text"
              value={book.title}
              name="title"
              placeholder="Change title"
              className="input-update"
              onChange={handleOnChangeUpdate}
            />
            <br></br>
            <label className="update-label">Author</label>
            <br></br>
            <input
              type="text"
              value={book.author}
              name="author"
              placeholder="Change title"
              className="input-update"
              onChange={handleOnChangeUpdate}
            />
            <br></br>
          </div>
          <div className="section-2">
            <label className="update-label">Category</label>
            <br></br>
            <select
              className="input-update"
              onChange={handleOnChangeUpdate}
              value={book.category}
              name="category"
            >
              <option value="Adventure stories">Adventure stories</option>
              <option value="Classics">Classics</option>
              <option value="Crime">Crime</option>
              <option value="Fairy tales, fables and folk tales">
                Fairy tales, fables and folk tales
              </option>
              <option value="Humar and Satire">Humar and Satire</option>
              <option value="Historical fiction">Historical fiction</option>
            </select>
            <br></br>
            <label className="update-label">Published Date</label>
            <br></br>
            <input
              type="date"
              className="input-update"
              value={book.published_date}
              name="published_date"
              onChange={handleOnChangeUpdate}
            />
          </div>
        </div>

        <label className="update-label">Image Url</label>
        <br></br>
        <input
          type="text"
          value={book.image_url}
          name="image_url"
          placeholder="Change title"
          className="input-update"
          id="image-update"
          onChange={handleOnChangeUpdate}
        />
        <br></br>

        <br></br>
        <label className="update-label">Description</label>
        <br></br>

        <textarea
          id="description-update"
          className="addbook-area"
          name="description"
          cols="50"
          rows="4"
          value={book.description}
          onChange={handleOnChangeUpdate}
        ></textarea>
        <br></br>
        <div className="update-btns">
          <button
            className="update-btn"
            id="cancel-btn"
            onClick={handleCancelUpdate}
          >
            Cancel
          </button>
          <button type="submit" className="update-btn" id="update-btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );

  return renderForm();
}

export default BookUpdate;

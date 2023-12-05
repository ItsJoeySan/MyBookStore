import React from "react";
import { useState } from "react";
import "../../pages/Home/Home.css";
import BackBookDetails from "../BackBookDetails/BackBookDetails";

export default function FrontBookDetails({ books }) {
  const [selectedBook, setSelectedBook] = useState(null);

  function toggleSummary(book) {
    setSelectedBook((selectedBook) => (selectedBook !== book ? book : null));
  }
  return (
    <div className="card-Container-Parent">
      {books.map((book) => (
        <div className="card-Container" key={book._id}>
          <div
            className="card-Container-child"
            style={{
              visibility: selectedBook !== book ? "visible" : "hidden",
            }}
          >
            <img src="https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?resize=768%2C432"></img>
            <h3>{book.name}</h3>
            <div className="genre-Container">
              <p className="publish-year">{book.publishYear}</p>
              {book.genre.map((genre, index) => (
                <p className="genre" key={index}>
                  {genre}
                </p>
              ))}
            </div>
            <div className="author">
              <p className="author">By {book.author}</p>
            </div>
            <p className="description">{book.description}</p>
          </div>
          <button className="card-button" onClick={() => toggleSummary(book)}>
            {">"}
          </button>
          {selectedBook === book && <BackBookDetails showBook={book} />}
        </div>
      ))}
    </div>
  );
}

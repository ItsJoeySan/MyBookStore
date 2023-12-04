import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

export default function home() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books/");
        const { count, data } = response.data;
        setbooks(data);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchManga();
  }, []);

  return (
    <div className="card-Container-Parent">
      {books.map((book) => (
        <div className="card-Container" key={book._id}>
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
      ))}
    </div>
  );
}

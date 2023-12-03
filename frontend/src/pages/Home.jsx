import React, { useEffect, useState } from "react";
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
    <div>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Year</th>
            <th>Genre</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>{book.genre}</td>
              <td>{book.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

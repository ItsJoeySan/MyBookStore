import React, { useEffect, useState } from "react";
import "./Home.css";
import BackBookDetails from "../../components/BackBookDetails/BackBookDetails";
import FrontBookDetails from "../../components/FrontBookDetails/FrontBookDetails";
import axios from "axios";

export default function home() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchManga = async () => {
      try {
        const response = await axios.get("http://localhost:3000/books/");
        const { data } = response.data;
        setbooks(data);
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchManga();
  }, []);

  return (
    <div>
      <FrontBookDetails books={books} />
    </div>
  );
}

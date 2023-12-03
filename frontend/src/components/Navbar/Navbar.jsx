import React from "react";
import "./navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="title">
        <h1>My Anime Books</h1>
      </div>
      <input type="search"></input>
      <p>About</p>
    </div>
  );
}

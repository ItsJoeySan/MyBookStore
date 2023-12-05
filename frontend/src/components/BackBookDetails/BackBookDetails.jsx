import React from "react";
import "../../pages/Home/Home.css";

export default function BackBookDetails({ showBook }) {
  return <div className="summary">{showBook.summary}</div>;
}

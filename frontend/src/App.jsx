import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import InsertBook from "./pages/InsertBook.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create/" element={<InsertBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/showbooks/:id" element={<ShowBook />} />
        <Route path="/delete/:id" element={<DeleteBook />} />
      </Routes>
    </>
  );
}

export default App;

import './App.css'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import EditBook from './pages/EditBook.jsx';
import ShowBook from './pages/ShowBook.jsx';
import InsertBook from './pages/InsertBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';

function App() {

  return (
    <>
      <h1>Hello</h1>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/edit-book' element={<EditBook/>} />
        <Route path='/show-book' element={<ShowBook/>} />
        <Route path='/upload-book' element={<InsertBook />} />
        <Route path='/delete-book' element={<DeleteBook />} />
      </Routes>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Book from './components/Book';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Addbook from './components/Addbook';
import './App.css';

function App() {
  const[books] = useState([{name :"God of war", auter: "I dont know"}, {name :"Harry poter", auter: "I dont know too"}])
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
        <Book books={books} />
        } />
        <Route path="/catagories" element={<Categories />} />
        <Route path="/add" element={<Addbook />} />
      </Routes>
    </div>
  );
}

export default App;

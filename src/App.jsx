import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Book from './components/Book';
import Nav from './components/Nav';
import Categories from './components/Categories';
import Addbook from './components/Addbook';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={
        <Book />
        } />
        <Route path="/catagories" element={<Categories />} />
        <Route path="/add" element={<Addbook />} />
      </Routes>
    </div>
  );
}

export default App;

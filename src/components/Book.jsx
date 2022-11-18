import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Addbook from './Addbook';
import Booklist from './Booklist';

function Book() {
    const Book = useSelector(state => state.books)
    console.log(Book)
    return (
      <div>
        <Addbook />
        <h1>List of books</h1>
        {Book.map((book) => (
           <Booklist 
           key={book.id}
           id={book.id}
           title={book.title}
           author={book.author}
           />
        ))}
      </div>
    );
}

export default Book;

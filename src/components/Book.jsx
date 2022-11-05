import React, { Component } from 'react';
import Addbook from './Addbook';

export default class Book extends Component {
  render() {
    let Book = this.props.books
    console.log(Book)
    return (
      <div>
        <Addbook />
        <h1>List of books</h1>
        {Book.map((book) => {
           return (
            <>
              <h3>Title = {book.name}</h3>
              <hr />
              <h3>Autor = {book.auter}</h3>
              <hr />
            </>
           )
        })}
        <button type="submit">Remove</button>
      </div>
    );
  }
}

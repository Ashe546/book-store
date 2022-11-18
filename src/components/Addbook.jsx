import React, { Component, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addAction } from '../redux/books/books';

const Addbook = () => {
  const [inputText, setInputText] = useState({
  title: '',
  author: '',
    });

  
  const handelChange = (e) => {
  setInputText({
    ...inputText,
    [e.target.name]: e.target.value,
  })
  }

  const newBook = {
  id: uuidv4(),
  title: inputText.title,
  author: inputText.author,
  };

  const dispatch = useDispatch();

  const handelAddBook = () => {
  dispatch(addAction(newBook));
    };

  const handleSubmit = (e) => {
  e.preventDefault();
  setInputText({ title: '', author: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>title</label>
      <input name="title" type="text"  onChange={handelChange} placeholder="title"/>
      <label>Autor</label>
      <input  name="author" type="text" onChange={handelChange} placeholder="author"/>
      <button type="submit" onClick={handelAddBook}>Submit</button>
   </form>
  )
  }

export default Addbook;
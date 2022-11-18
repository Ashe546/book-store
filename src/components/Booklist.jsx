import React from 'react'
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { revAction } from '../redux/books/books' 

export default function booklist(props) {

  const {id, title, author } = props;
 
  const dispatch = useDispatch(); 

  const handelRemove = () => {
    dispatch(revAction(id))
  }

  return (
    <div>
      <li key={id}>
        {title} : {author}
      </li>
      <button onClick={handelRemove} type="button">Remove</button>
    </div>
  )
}

booklist.propTypes = ({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  });

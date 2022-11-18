import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/catagories">Catagories</Link>
          <Link to="/add">Add books</Link>
        </nav>
      </div>
    );
  }
}

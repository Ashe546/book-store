import React, { Component } from 'react'

export default class Addbook extends Component {
  render() {
    return (
      <div>
        <label>title</label>
        <input type="text" />
        <label>Autor</label>
        <input type="text" />
        <button type="submit">Submit</button>
      </div>
    )
  }
}

import React, { Component } from 'react'
// import './Line.css'

class Line extends Component {
  constructor(props) {
    super(props)
    this.state = {
      line: 'Where is our honeymoon gonna be?'
    }
  }
  render () {
    return (
      <p>
      {this.state.line}
      </p>
    )
  }
}

export default Line

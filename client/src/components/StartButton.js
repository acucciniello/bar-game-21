import React, { Component } from 'react'
// import './StartButton.css'

class StartButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button type={this.props.type} value={this.props.value} name={this.props.name} onClick={this.updateLine}>
      New Line Please!
      </button>
    )
  }

  updateLine() {
    console.log('We Updated the line')
  }
}

export default StartButton

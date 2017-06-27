import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Line from './components/Line.js'
import StartButton from './components/StartButton.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Line />
        <StartButton type='button' value='Get New Line' name='Get New Line' />
      </div>
    )
  }
}

export default App

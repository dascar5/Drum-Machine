/** @format */
import React from 'react'
import './Styles/App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {sounds} from './Assets/drumConsts'
import {DrumPad} from './Components/BoxComponent'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="container" id="drum-machine">
        <div id="display" className="display">
          {sounds.map((sound, idx) => (
            <DrumPad text={sound.key} key={idx} audio={sound.mp3}></DrumPad>
          ))}
          <br></br>
          <h1>Play a sound</h1>
        </div>
      </div>
    )
  }
}

//const Box = props => <div className="box">{props.text}</div>

export default App

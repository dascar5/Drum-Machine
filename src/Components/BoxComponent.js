/** @format */

import React from 'react'

class DrumPad extends React.Component {
  constructor(props) {
    super(props)
    this.audio = React.createRef()
    this.playSound = this.playSound.bind(this)
  }

  playSound() {
    this.audio.current.play()
  }

  render() {
    const {text, audio} = this.props
    return (
      <div className="drum-pad" onClick={this.playSound} id={`drum - ${text}`}>
        {text} <audio ref={this.audio} className="clip" src={audio} id={text} />
      </div>
    )
  }
}

document.addEventListener('keydown', e => {
  const id = e.key.toUpperCase()
  const audio = document.getElementById(id)

  if (audio) {
    audio.currentTime = 0
    const parent = audio.parentNode
    parent.classList.add('active')
    audio.play()

    audio.addEventListener('ended', () => {
      parent.classList.remove('active')
    })

    const display = parent.parentNode
    display.querySelector('h1').innerText = `${id} is playing`
  }
})

export {DrumPad}

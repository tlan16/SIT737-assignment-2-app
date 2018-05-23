import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import {getSpeech} from "../../services/tts"
import {getAudioElement} from "./AudioPlayer"

class Bar extends React.Component {
  style = {
    'cursor': 'pointer',
  }

  onClick = () => {
    getSpeech(this.props.label, this.props.voice, res => {
      const audio = getAudioElement(JSON.parse(res.text), 'audio/wav')
      audio.play()
    })
  }

  render() {
    return (
      <span>
        <ProgressBar
          now={this.props.now < 1 ? this.props.now * 100 : this.props.now}
          label={this.props.label}
          onClick={this.onClick}
          data-tip={'Click to play!'}
          style={this.style}
        />
        <ReactTooltip />
      </span>
    )
  }
}

export default Bar
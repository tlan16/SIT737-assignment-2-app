import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import {getSpeech} from "../../services/tts"

class Bar extends React.Component {
  style = {
    'cursor': 'pointer',
  }

  onClick = () => {
    getSpeech(this.props.label, this.props.voice, res => {
      const blob = new Blob([new Uint8Array(JSON.parse(res.text))], {type: 'audio/wav'})
      const url = URL.createObjectURL(blob)

      const audio = new Audio(url)
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
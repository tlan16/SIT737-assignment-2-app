import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import {getSpeech} from "../../services/tts"
import {translate as Translate} from "../../services/translate"
import {getAudioElement} from "./AudioPlayer"

class Bar extends React.Component {
  constructor(props) {
    super(props)
    this.translate()
  }

  state = {
    label: '',
  }

  style = {
    'cursor': 'pointer',
  }

  onClick = () => {
    getSpeech(this.props.label, this.props.voice, res => {
      const audio = getAudioElement(JSON.parse(res.text), 'audio/wav')
      audio.play()
    })
  }

  translate = () => {
    Translate(this.props.label, this.props.voice.slice(0, 2), res => {
      this.setState({
        label: res.text,
      })
    })
  }

  render() {
    return (
      <span>
        {
          this.state.label.length ? (
            <ProgressBar
              now={this.props.now < 1 ? this.props.now * 100 : this.props.now}
              label={this.state.label}
              onClick={this.onClick}
              data-tip={'Click to play!'}
              style={this.style}
            />
          ) : undefined
        }
        <ReactTooltip />
      </span>
    )
  }
}

export default Bar
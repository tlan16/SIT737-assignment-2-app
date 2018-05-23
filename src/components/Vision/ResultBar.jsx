import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import Loadable from 'react-loading-overlay'
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
    loading: true,
  }

  style = {
    'cursor': 'pointer',
  }

  onClick = () => {
    this.setState({
      loading: true,
    })
    getSpeech(this.props.label, this.props.voice, res => {
      this.setState({
        loading: false,
      })
      const audio = getAudioElement(JSON.parse(res.text), 'audio/wav')
      audio.play()
    })
  }

  translate = () => {
    Translate(this.props.label, this.props.voice.slice(0, 2), res => {
      this.setState({
        label: res.text,
        loading: false,
      })
    })
  }

  render() {
    return (
      <span>
        {
          this.state.label.length ? (
            <Loadable
              active={this.state.loading}
              spinner
              text='Loading ...'
            >
              <ProgressBar
                now={this.props.now < 1 ? this.props.now * 100 : this.props.now}
                label={this.state.label}
                onClick={this.onClick}
                data-tip={'Click to play!'}
                style={this.style}
              />
              <ReactTooltip />
            </Loadable>
          ) : undefined
        }
      </span>
    )
  }
}

export default Bar
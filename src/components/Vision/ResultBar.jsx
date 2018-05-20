import React from 'react'
import {ProgressBar} from 'react-bootstrap'

class Bar extends React.Component {
  render() {
    return (
      <ProgressBar
        now={this.props.now < 1 ? this.props.now * 100 : this.props.now}
        label={this.props.label}
      />
    )
  }
}

export default Bar
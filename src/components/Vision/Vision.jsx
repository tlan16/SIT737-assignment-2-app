import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import {Transition, animated} from 'react-spring'
import Uppy from '../Uppy'
import {getUppyXHRUpload} from '../../services/vision'
import Bar from './ResultBar'

class Vision extends React.Component {
  state = {
    visionResult: [],
    previewImage: '',
  }

  styles = {
    previewImage: {
      maxHeight: '200px',
      maxWidth: '200px',
    },
  }

  XHRUpload = getUppyXHRUpload((responseText) => {
    try {
      this.setState({
        visionResult: JSON.parse(responseText),
      })
    } catch (e) {
      console.error('cannot parse result as JSON')
    }
  })

  onUppySuccess = (uppy, file) => {
    const reader = new FileReader()

    reader.addEventListener("load", () => {
      this.setState({
        previewImage: reader.result,
      })
    }, false)

    reader.readAsDataURL(file.data)

    uppy.reset()
  }

  generateResultBars = (results = []) => {
    const myStyles = {
      marginBottom: '20px',
    }

    return (
      <Transition
        native
        keys={results.map(item => item.mid)}
        from={{opacity: 0, height: 0}}
        enter={{opacity: 1, height: 20}}
        leave={{opacity: 0, height: 0}}>
        {results.map(item => styles =>
          <animated.div style={{...myStyles, ...styles}}>
            <Bar
              key={item.mid}
              now={item.score}
              label={item.description}
              voice={this.props.voice}
            />
          </animated.div>
        )}
      </Transition>
    )
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h3>Vision Analysis</h3>
          </Col>
          <Col xs={6}>
            <img
              src={this.state.previewImage}
              style={this.styles.previewImage}
            />
            <Uppy
              XHRUpload={this.XHRUpload}
              onUppySuccess={this.onUppySuccess}
            />
          </Col>
          <Col xs={6}>
            {this.generateResultBars(this.state.visionResult)}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Vision
import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Uppy from '../Uppy'
import {getUppyXHRUpload} from '../../services/vision'
import Bar from './ResultBar'

class Vision extends React.Component {
  state = {
    visionResult: [],
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

  generateResultBars = (results = []) => {
    return results.map(({mid, score, description}) =>
      <Bar
        key={mid}
        now={score}
        label={description}
        voice={this.props.voice}
      />
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
            <Uppy
              XHRUpload={this.XHRUpload}
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
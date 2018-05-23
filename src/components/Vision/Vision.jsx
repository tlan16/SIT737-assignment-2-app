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

  static generateResultBars(results = []) {
    return results.map(result =>
      <Bar key={result.mid} now={result.score} label={result.description} />
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
            {Vision.generateResultBars(this.state.visionResult)}
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default Vision
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Title from './Title'
import Uppy from './Uppy'

class App extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <Title />
        <Uppy />
      </div>
    )
  }
}

export default App
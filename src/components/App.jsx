import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HelloWorld from './HelloWorld'
import Uppy from './Uppy'

class App extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <HelloWorld />
        <Uppy />
      </div>
    )
  }
}

export default App
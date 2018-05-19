import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import HelloWorld from './HelloWorld'

class App extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <HelloWorld />
      </div>
    )
  }
}

export default App
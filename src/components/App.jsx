import React from 'react'
import Title from './Title'
import Vision from './Vision/Vision'

class App extends React.Component {
  render() {
    return (
      <div className={'container'}>
        <Title />
        <Vision />
      </div>
    )
  }
}

export default App
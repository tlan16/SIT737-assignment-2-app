import React from 'react'
import Title from './components/Title'
import Vision from './components/Vision/Vision'
import VoiceSelector from "./components/Vision/VoiceSelector"

class App extends React.Component {
  state = {
    voice: undefined,
  }

  onVoiceSelected = voice => {
    this.setState({
      voice,
    })
  }

  render() {
    return (
      <div className={'container'}>
        <Title />
        <VoiceSelector onSelectOption={this.onVoiceSelected} />
        {this.state.voice ? <Vision voice={this.state.voice} /> : undefined}
      </div>
    )
  }
}

export default App
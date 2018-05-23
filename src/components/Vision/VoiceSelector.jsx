import React from 'react'
import Select from 'react-select'
import {InputGroup} from 'react-bootstrap'
import {codeToName} from '../../helpers/languageCode'
import {getVoices} from "../../services/tts"

class VoiceSelector extends React.Component {
  constructor(props) {
    super(props)
    getVoices(res => {
      this.setState(this.formatVoiceOptions(res))
    })
  }

  formatVoiceOptions(voices) {
    const result = {
      options: [],
      defaultValue: undefined,
    }

    const reducer = (occ, index) => {
      const voice = voices[index]
      const voiceKey = index
      const voiceLanguage = codeToName(voice['language'].slice(0, 2))

      if (!occ[voiceLanguage]) // init
        occ[voiceLanguage] = {
          label: voiceLanguage,
          options: [],
        }

      const newOption = {
        value: voiceKey,
        label: voice['description'],
      }
      occ[voiceLanguage]['options'] = occ[voiceLanguage]['options'].concat([newOption])

      if (!this.state.defaultValue && voiceKey.toLowerCase().startsWith('en'))
        result.defaultValue = newOption
      return occ
    }

    result.options = Object.values(
      Object.keys(voices).reduce(reducer, {})
    )

    return result
  }

  state = {
    options: [],
  }

  onchange = ({value}, {action}) => {
    if (action === 'select-option' && this.props.onSelectOption instanceof Function)
      this.props.onSelectOption(value)
  }

  render() {
    return (
      <InputGroup>
        <InputGroup.Addon>
          Select a Voice
        </InputGroup.Addon>
        <Select
          options={this.state.options}
          defaultValue={this.state.defaultValue}
          onChange={this.onchange}
          isDisabled={this.props.isDisabled}
          autoFocus={true}
        />
      </InputGroup>
    )
  }
}

export default VoiceSelector
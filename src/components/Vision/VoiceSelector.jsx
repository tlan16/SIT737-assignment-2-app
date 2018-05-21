import React from 'react'
import Select from 'react-select'
import Request from 'superagent'
import {InputGroup} from 'react-bootstrap'
import {codeToName} from '../../helpers/languageCode'

class VoiceSelector extends React.Component {
  constructor() {
    super()
    this.fetchOptions(res => {
      this.setState(this.formatVoiceOptions(res))
    })
  }

  fetchOptions(callback) {
    Request.get(process.env.API_URL + '/text-to-speech/voices', (err, res) => {
      if (!err && callback instanceof Function) callback(res.body)
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

  render() {
    return (
      <InputGroup>
        <InputGroup.Addon>
          Voice
        </InputGroup.Addon>
        <Select
          options={this.state.options}
          defaultValue={this.state.defaultValue}
        />
      </InputGroup>
    )
  }
}

export default VoiceSelector
import {Request} from './superagent'

export const getVoices = callback => {
  Request.get('/text-to-speech/voices')
    .then(res => {
      if (callback instanceof Function) callback(res.body)
    })
}

export const getSpeech = (word, voice, callback) => {
  Request.get(`/text-to-speech/speak/${word}`)
    .query({
      voice,
    })
    .then(res => {
      if (callback instanceof Function) callback(res.body)
    })
}
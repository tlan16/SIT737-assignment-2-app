import {Request} from './superagent'

export const getVoices = callback => {
  Request.get(process.env.API_URL + '/text-to-speech/voices', (err, res) => {
    if (!err && callback instanceof Function) callback(res.body)
  })
}
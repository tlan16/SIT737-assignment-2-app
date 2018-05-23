import {Request} from './superagent'

export const translate = (word, language, callback) => {
  Request.get(`/translate/${word}`)
    .query({
      language,
    })
    .then(res => {
      if (callback instanceof Function) callback(res)
    })
}
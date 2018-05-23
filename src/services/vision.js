import {BaseURl} from "./superagent"

export const getUppyXHRUpload = onResponse => (
  {
    endpoint: `${BaseURl}/vision/label`,
    method: 'post',
    formData: true,
    fieldName: 'image',
    bundle: true,
    getResponseData: onResponse,
  }
)
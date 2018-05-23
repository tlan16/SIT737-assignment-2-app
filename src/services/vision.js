export const getUppyXHRUpload = onResponse => (
  {
    endpoint: `${process.env.API_URL}/vision/label`,
    method: 'post',
    formData: true,
    fieldName: 'image',
    bundle: true,
    getResponseData: onResponse,
  }
)
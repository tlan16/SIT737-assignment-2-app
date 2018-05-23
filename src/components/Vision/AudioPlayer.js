export const getAudioElement = (byteArray, mimeType) => {
  const array = new Uint8Array(byteArray)
  const blob = new Blob([array], {type: mimeType})
  const url = URL.createObjectURL(blob)

  return new Audio(url)
}
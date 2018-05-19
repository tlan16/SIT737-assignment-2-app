import React from 'react'
import 'uppy/dist/uppy.css'
import Uppy from 'uppy/lib/core'
import Tus from 'uppy/lib/plugins/Tus'
import {ProgressBar, DragDrop} from 'uppy/lib/react'

class MyUppy extends React.Component {
  constructor(props) {
    super(props)

    console.log(process.env.API_URL)
    this.state = {}
  }

  componentWillMount() {
    this.uppy = new Uppy({
      id: 'uppy',
      debug: true,
      autoProceed: false,
      maxFileSize: 1000000, // 1MB
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1,
      allowedFileTypes: ['.jpg', '.jpeg', '.png', '.gif'],
    })

    this.uppy
      .use(Tus, {endpoint: 'https://master.tus.io/files/'})

    this.uppy
      .on('file-added', (file) => {
        console.log('Added file', file)
      })
      .on('file-removed', (file) => {
        console.log('Removed file', file)
      })
      .on('upload', (data) => {
        console.log(`Upload status`, data)
      })
      .on('upload-progress', (file, progress) => {
        console.log(file.id, progress.bytesUploaded, progress.bytesTotal)
      })
      .on('upload-success', (file, resp, uploadURL) => {
        console.log(`Upload successful`, file.name, uploadURL)
      })
      .on('complete', (result) => {
        console.log('successful files:', result.successful)
        console.log('failed files:', result.failed)
      })
      .on('upload-error', (file, error) => {
        console.log('error with file:', file.id)
        console.log('error message:', error)
      })
      .on('info-visible', () => {
        const info = this.uppy.getState().info
        alert(`${info.message} ${info.details}`)
      })

    this.uppy.run()
  }

  componentWillUnmount() {
    this.uppy.close()
  }

  render() {
    return (
      <div>
        <h2>Drag Drop Area</h2>
        <DragDrop
          uppy={this.uppy}
        />

        <h2>Progress Bar</h2>
        <ProgressBar
          uppy={this.uppy}
        />
      </div>
    )
  }
}

export default MyUppy

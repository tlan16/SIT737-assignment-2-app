import React from 'react'
import 'uppy/dist/uppy.css'
import Uppy from 'uppy/lib/core'
import XHRUpload from 'uppy/lib/plugins/XHRUpload'
import {ProgressBar, DragDrop} from 'uppy/lib/react'

class MyUppy extends React.Component {
  componentWillMount() {
    this.uppy = new Uppy({
      id: 'uppy',
      debug: process.env.NODE_ENV !== 'production',
      autoProceed: true,
      restrictions: {
        maxFileSize: 1000000, // 1MB
        maxNumberOfFiles: 1,
        minNumberOfFiles: 1,
        allowedFileTypes: ['image/*', '.jpg', '.jpeg', '.png', '.gif'],
      },
    })

    this.uppy
      .use(XHRUpload, this.props.XHRUpload)

    this.uppy
      .on('upload', (data) => {
        this.props.onUpload(this.uppy)
      })
      .on('upload-success', (file, resp, uploadURL) => {
        this.props.onUppySuccess(this.uppy, file)
      })

    this.uppy.run()
  }

  componentWillUnmount() {
    this.uppy.close()
  }

  render() {
    return (
      <div>
        <DragDrop
          uppy={this.uppy}
        />
        <ProgressBar
          uppy={this.uppy}
        />
      </div>
    )
  }
}

export default MyUppy

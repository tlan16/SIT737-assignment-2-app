import React from 'react';
import Uppy from 'uppy/lib/core';
import DragDrop from 'uppy/lib/react/DragDrop';

const uppy = Uppy({
  meta: {type: 'avatar'},
  restrictions: {maxNumberOfFiles: 1},
  autoProceed: true,
});

uppy.on('complete', (result) => {
  console.log(result);
});

uppy.run()

const Vision = () =>
  (
    <div>
      <DragDrop
        uppy={uppy}
        locale={{
          strings: {
            chooseFile: 'Pick a new avatar',
          },
        }}
      />
    </div>
  );

export default Vision;

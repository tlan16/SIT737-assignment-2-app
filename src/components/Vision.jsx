import React from 'react';
import Dropzone from 'react-dropzone';

const onDrop = (acceptedFiles) => {
  console.log(acceptedFiles);
};

const Vision = () =>
  (
    <Dropzone
      onDrop={onDrop}
    />
  );

export default Vision;
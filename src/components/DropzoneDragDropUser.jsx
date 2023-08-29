import React from 'react'
import {useDropzone} from 'react-dropzone'

function DropzoneDragDrop( { onFileDrop,data }) {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone( {
      onDrop: (acceptedFiles) => {
      onFileDrop(acceptedFiles); // Pass acceptedFiles to the parent component
  },}
  );

  const files = acceptedFiles.map(file => (
    <span key={file.path}>
      {file.path} - {file.size} bytes
    </span>
  ));

  return (
    <section className="">
      <div {...getRootProps({className: 'dropzone'})}>
      <label className='mb-2 sessions-body-color d-flex align-items-start' htmlFor="image"  >Photo  { data?.map((error, index) => error.message.includes('image') ? <div key={index} className='error d-flex  mx-1 pt-1'> <img src="star.svg"/></div>:"")} </label>

        <div className='profile-pic  upload-space text-center'>
          <div className='d-flex align-items-center justify-content-center'>
          <div>
            <input  className='form-control ' type="text"  id='image'name='image'  {...getInputProps()} />
            <div className="img-container mt-4">
               <img src="Upload.svg" alt="" className='p-3 ' />
            </div>
            <p className='mb-0 '> <strong>Click to upload</strong></p>
            <p> or drag and drop</p>
          </div>
          </div>
        </div>
      </div>
      <aside>
        <div className='text-center mb-4 mt-1'>{files}</div>
      </aside>
    </section>
  );

}
export default DropzoneDragDrop;

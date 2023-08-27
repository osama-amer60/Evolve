import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

function DropzoneDragDrop() {
  const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
  const files = acceptedFiles.map(file => (
    <span key={file.path}>
      {file.path} - {file.size} bytes
    </span>
  ));

  return (
    <section className="">
      <div {...getRootProps({className: 'dropzone'})}>
        <label className='mt-4 mb-2 sessions-body-color d-flex align-items-start' htmlFor="thumbnail"  >Thumbnail </label>
        <div className='d-flex align-items-center justify-content-center py-5 upload-space text-center'>
          <div>
            <input  className='form-control ' type="text"  id='thumbnail'name='thumbnail'  {...getInputProps()} />
            <div className="img-container">
               <img src="Upload.svg" alt="" className='p-3 ' />
            </div>
            <p className='mb-0 mt-4'> <strong>Click to upload</strong> or drag and drop</p>
            <p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
            <div> <strong>{files} </strong>  </div>
          </div>
        </div>
      </div>
      {error && <p className="error-message">{error}</p>}
      {/* <aside>
        <h4>Files</h4> 
        <ul>{files}</ul>
      </aside> */}
    </section>
  );

}
export default DropzoneDragDrop;

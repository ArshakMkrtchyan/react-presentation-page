import React, { useContext } from 'react'
import ImageUploading from 'react-images-uploading';
import { MyContext } from '../Context';


export default function Modal() {

  const modalVal = useContext(MyContext);

  return (
    <div className='modal' style={{ display: modalVal.stylemodal }}>
      <input type="text" value={modalVal.title} placeholder='title' onChange={(e) => { modalVal.setTitle(e.target.value) }} />
      <input type="text" value={modalVal.description} placeholder='description' onChange={(e) => { modalVal.setDescription(e.target.value) }} />
      <button className='modalAdd' onClick={modalVal.addRigthInfo}>add</button>
      <button className='modalClose' onClick={modalVal.styleNone}>x</button>

      <ImageUploading
        multiple
        value={modalVal.images}
        onChange={modalVal.onChange}
        maxNumber={modalVal.maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <button onClick={onImageRemoveAll}>Remove all images</button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  )
}

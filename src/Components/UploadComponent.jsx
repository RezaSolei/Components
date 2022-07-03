import React from 'react'
import './UploadComponent.css'
import uploadImg from './imgs/image-icon.png'

function UploadComponent() {
  return (
    <div>
      

      <div className='divimageuploader'>
              
              <img className='image_icon' src={uploadImg}></img>
  
                
              </div>
  
              
  
              {/* <p className='imageuploader-text'>image product</p> */}
              <div className='imageuploaderborder'></div>
  
          <div className='uploadfolder'>
              <input type="file" name="file" id="file" class="inputfile" />
              <label label for="file">Upload Cerificare Image Here</label>
              </div>

      </div>
  )
}

export default UploadComponent